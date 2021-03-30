import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IUser from 'src/app/shared/user';
import { LoginServiceService } from '../registration-page/login-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  userDetails:IUser={cart:[],email:'',firstName:'',lastName:'',password:''};
  checkAdmin:boolean=false;

  checkFirstName(){
    return this.userDetails.firstName;
  }

  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.profileForm().subscribe(
      res => {
        this.userDetails = res['user']
        console.log(this.loginService.getCookie("firstName"))
        if(this.userDetails.firstName.includes("admin")){
          this.checkAdmin=true;
          document.cookie=`firstName=${this.userDetails.firstName}`
        }
      },
      err => {
        console.log(err.message)
      }
    )
  }

  logoutFunc (){
    this.loginService.deleteToken();
    this.router.navigate(['/login'])
  }

  openAdminDashBored(){
    this.router.navigate(['/dash-bored']);
  }
}
