import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class PerfileService {

  baseUrl: string;

  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/photographer-perfil'

  }

  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}`, httpOptions).toPromise()
  };

  getById(idusuarios: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })

    }
    return this.HttpClient.get<any>(`${this.baseUrl}/${idusuarios}`, httpOptions).toPromise()
  }

  register(formValue: any): Promise<any> {
    console.log(formValue)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.post<any>(`${this.baseUrl}/register`, formValue, httpOptions).toPromise()
  };

  deleteById(idusuarios: number): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token_photravel')!
      })
    }
    return this.HttpClient.delete(`${this.baseUrl}/profile${idusuarios}`, httpOptions).toPromise()
  }

  getLocation(pAddress: string): Promise<any> {
    return this.HttpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q&address=${pAddress}`).toPromise()
  }













}
