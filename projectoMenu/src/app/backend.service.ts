import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const myip = "127.0.0.1:3000";

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
}