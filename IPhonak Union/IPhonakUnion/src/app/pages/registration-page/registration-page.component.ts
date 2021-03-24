import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/classes/user';
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
        console.log("work");
        this.loginService.setToken(data['token']);
        this.router.navigate(['/home-page']);
      },
      err => {
        console.log(formData)
        console.log("not working");
        this.serverErrorMessage = err.error.message;
        event.preventDefault();
      }
    )
  }

  constructor(private fb:FormBuilder,private loginService:LoginServiceService,private router: Router) { }

  ngOnInit(): void {
  }

}
