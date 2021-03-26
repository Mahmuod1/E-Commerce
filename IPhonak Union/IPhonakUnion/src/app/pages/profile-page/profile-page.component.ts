import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/classes/user';
import { LoginServiceService } from '../registration-page/login-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  userDetails:any;
  checkAdmin:boolean=false;

  constructor(private loginService:LoginServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.profileForm().subscribe(
      res => {
        this.userDetails = res['user']
        if(this.userDetails.firstName === 'admin'){
          this.checkAdmin=true;    
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
    console.log('Open Admin dash bored');
    
  }
}
