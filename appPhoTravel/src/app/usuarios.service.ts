import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


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

  register(formValue: any): Promise<any> {
    console.log(formValue)
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


}
