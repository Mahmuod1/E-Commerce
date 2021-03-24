import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _url="http://localhost:4750/account/users/login"

  constructor(private _http:HttpClient) { }

  loginForm(user:ILogin){
    return this._http.post<ILogin>(this._url,user);
  }

  setToken(token:any){
    localStorage.setItem('token',token);
  }
}
