import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, IProfile } from 'src/app/classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  noAuthHeader= { headers:new HttpHeaders({'NoAuth':'true'})}

  _url="http://localhost:4750/account/users/login"

  _urlProfile="http://localhost:4750/account/users/account"

  constructor(private _http:HttpClient) { }

  loginForm(user:ILogin){
    return this._http.post<ILogin>(this._url,user,this.noAuthHeader);
  }

  profileForm(){
    return this._http.get<any>(this._urlProfile);
  }

  getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  fetchName(){
    return this.getCookie("firstName")
  }

  setToken(token:any){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken() {
    localStorage.removeItem('token')
  }

  getUserPayload(){
    let token =this.getToken();
    if(token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    let userPayload=this.getUserPayload();
    if(userPayload){
      return userPayload.exp > Date.now() / 1000;
    }
    else{
      return null
    }
  }
}
