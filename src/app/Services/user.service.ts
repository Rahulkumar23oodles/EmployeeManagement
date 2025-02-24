import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponsemodel, User } from '../model/interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/User/GetAllUsers';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<ApiResponsemodel> {
    return this.http.get<ApiResponsemodel>(this.apiUrl);
  }
}
