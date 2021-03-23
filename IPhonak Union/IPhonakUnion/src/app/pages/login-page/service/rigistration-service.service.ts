import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class RigistrationServiceService {

  _url="http://localhost:4750/account/users/create"
  constructor(private _http:HttpClient) { }

  registerForm(user:User){
    return this._http.post<User>(this._url,user)
  }
}