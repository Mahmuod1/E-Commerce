import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/classes/user';
import { CartService } from '../cart/cart.service';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  loginForm=this.fb.group({
    email:[''],
    password:['']
  })

  serverErrorMessage:string="";

  submitData(formData:ILogin,event:Event){

    this.loginService.loginForm(formData).subscribe(
      data => {
        this.loginService.setToken(data['token']);
        // this.router.navigate(['/profile-page']);
window.location.href='http://localhost:4200/profile-page'
      },
      err => {
        this.serverErrorMessage = err.error.message;
        console.log(this.serverErrorMessage);
        
        event.preventDefault();
      }
    )
  
  }

  constructor(private fb:FormBuilder,private loginService:LoginServiceService,private router: Router,
    private cartService:CartService) { }

  ngOnInit(): void {
  }

}
