import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Photographer } from './components/interface/interface.photographer';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;
  private login$: Subject<boolean>;//para avisar a los componentes subcriptores

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuario-perfil';
    this.login$ = new Subject;
  }

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}`, httpOptions).toPromise()
  }



  register(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.post<any>(`${this.baseUrl}/register`, formValue, httpOptions).toPromise()
  }

  login(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.post<any>(`${this.baseUrl}/login`, formValue, httpOptions).toPromise()
  }

  logged(isLogged: boolean) {
    this.login$.next(isLogged)
  }

  loginObs() {
    return this.login$.asObservable();
  }

  getById(idusuario: Photographer): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this.HttpClient.get<any>(`${this.baseUrl}/${idusuario.idusuarios}`, httpOptions).toPromise()
  };



  upDate(idusuarios: number, formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
    return this.HttpClient.put<any>(`${this.baseUrl}/${idusuarios}`, formValue, httpOptions).toPromise()
  }



}
