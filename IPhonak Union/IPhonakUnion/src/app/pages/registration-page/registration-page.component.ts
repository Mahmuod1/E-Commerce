import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILogin } from 'src/app/classes/user';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  loginForm=this.fb.group({
    loginEmail:[''],
    loginPassword:['']
  })

  submitData(formData:ILogin,event:Event){
    console.log(formData)
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
