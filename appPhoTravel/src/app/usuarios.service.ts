import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;
  private login$: Subject<boolean>;//para avisar a los componentes subcriptores

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/users';
    this.login$ = new Subject;
  }

  register(formValue: any): Promise<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/register`, formValue).toPromise()
  }

  login(formValue: any): Promise<any> {
    return this.HttpClient.post<any>(`${this.baseUrl}/login`, formValue).toPromise()
  }



}
