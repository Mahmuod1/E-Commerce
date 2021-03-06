import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { ForbiddenNameValidator } from 'src/app/shared/userNameValidation';
import { RigistrationServiceService } from './service/rigistration-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorFromServer:boolean=false;


  registerationForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4),ForbiddenNameValidator(/admin/)]],
    lastName: ['',[Validators.required,Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    password: ['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)]]
  })

  get firstName() {
    return this.registerationForm.get('firstName');
  }

  get lastName() {
    return this.registerationForm.get('lastName');
  }

  get email() {
    return this.registerationForm.get('email');
  }

  get password() {
    return this.registerationForm.get('password');
  }

  user=new User(this.firstName!.value,this.lastName!.value,this.email!.value,this.password!.value);

  
  submitData(formData: User,event:Event){
    this.registrationService.registerForm(formData).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.errorFromServer=true;
        console.log("error:",error)
        event.preventDefault();
      }
    )
  }

  
  constructor(private fb: FormBuilder,private registrationService:RigistrationServiceService,private router:Router) { }

  ngOnInit(): void {
  }

}
