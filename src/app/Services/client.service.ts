import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../Enviromments/environment';
import { ApiResponsemodel } from '../model/interface/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor( private http:HttpClient) { }

  getallClient():Observable<ApiResponsemodel>{
     return this.http.get<ApiResponsemodel>(environment.API_URL +'GetAllClients')
  }

  addUpdateClient(obj:Client):Observable<ApiResponsemodel>{
    return this.http.post<ApiResponsemodel>(environment.API_URL +'AddUpdateClient',obj)
  }

  deleteClientbyId(id:number):Observable<ApiResponsemodel>{
    return this.http.delete<ApiResponsemodel>(environment.API_URL +'DeleteClientByClientId?clientid='+id)
    
  }
}
