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

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}`, httpOptions).toPromise()
  };

  register(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.post<any>(`${this.baseUrl}/register`, formValue, httpOptions).toPromise()
  };

  login(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.post<any>(`${this.baseUrl}/login`, formValue, httpOptions).toPromise()
  };

  logged(isLogged: boolean) {
    this.login$.next(isLogged)
  };

  loginObs() {
    return this.login$.asObservable();
  };

  deleteById() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })

    }
    return this.HttpClient.delete<any>(`${this.baseUrl}`, httpOptions).toPromise()
  }

  updatePublic(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }

    return this.HttpClient.put<any>(`${this.baseUrl}/public`, formValue, httpOptions).toPromise()
  }

  updatePrivate(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.put<any>(`${this.baseUrl}/private`, formValue, httpOptions).toPromise()
  }

  getById(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}/idUsuario`, httpOptions).toPromise()
  }

}
