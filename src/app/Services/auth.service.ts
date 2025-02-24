import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../model/interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL="https://freeapi.miniprojectideas.com/api/User/Login"

  constructor(private http: HttpClient) {}

  login(credentials:LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.apiURL,credentials)

  }
}
