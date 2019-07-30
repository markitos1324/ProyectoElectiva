import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public httpClient: HttpClient) { }

  getGeneral() {  
    return this.httpClient.get('http://127.0.0.1:3000/hola2');
  }
}