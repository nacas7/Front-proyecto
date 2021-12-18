import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesagesService {

  baseUrl: string;
  constructor(private HttpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/chat"
  }

  createMessage(formValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }

    return this.HttpClient.post<any>(`${this.baseUrl}/message`, formValue, httpOptions).toPromise()
  }

  //recupero todo los mensajes que envia el usuario
  getAllSent(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}/message`, httpOptions).toPromise()
  }

  //recupero todos los mensajes que envia el usuario
  getAllBy(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}/received`, httpOptions).toPromise()
  }






}
