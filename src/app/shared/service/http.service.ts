import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { Pet } from '../model/Pet';
import { PetDto } from '../model/PetDto';

@Injectable({
  providedIn: 'root'
})
export class HttpService{


  constructor(private httpClient: HttpClient){}

post(path: string, body = null):Observable<any>{
    return this.httpClient.post(`${environment.apiUri}${path}`, body);
  }
get(path:string): Observable<any> {
  return this.httpClient.get( `${environment.apiUri}${path}`);
  }

delete(path:string): Observable<any>{
  return this.httpClient.delete( `${environment.apiUri}${path}`);
}
put(path: string, body = null):Observable<any>{
  return this.httpClient.put(`${environment.apiUri}${path}`, body);
}
}
