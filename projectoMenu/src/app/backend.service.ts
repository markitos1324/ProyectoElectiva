import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const myip = "192.168.0.14:3000";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public httpClient: HttpClient) { }

  getPrincipal() {  
    return this.httpClient.get('http://' + myip + '/principal');
  }

  getGeneral() {  
    return this.httpClient.get('http://' + myip + '/general');
  }

  getInfelcom(){
    return this.httpClient.get('http://' + myip + '/infelcom');
  }

  getGimi(){
    return this.httpClient.get('http://' + myip + '/gimi');
  }

  getGis(){
    return this.httpClient.get('http://' + myip + '/gis');
  }

  getTelematic(){
    return this.httpClient.get('http://' + myip + '/telematic');
  }

  getProfesores(){
    return this.httpClient.get('http://' + myip + '/profesores');
  }


}