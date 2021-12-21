import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllPhotographersService {

  baseUrl: string;
  constructor(private HttpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/all-photographer'
  }


  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.HttpClient.get<any>(`${this.baseUrl}`, httpOptions).toPromise()
  }

  getById(idusuario: any): Promise<any> {

    return this.HttpClient.get<any>(`${this.baseUrl}/${idusuario}`).toPromise()

  }



  getLocation(pAddress: string): Promise<any> {
    return this.HttpClient.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q&address=${pAddress}`).toPromise()
  }

}
