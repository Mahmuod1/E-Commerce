import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { ProductsService } from 'src/app/components/products/products.service';
import { RigistrationServiceService } from 'src/app/pages/login-page/service/rigistration-service.service';
import { IProduct } from 'src/app/shared/product';
import { AdminInterFaceServiceService } from './admin-inter-face-service.service';

@Component({
  selector: 'app-admin-inter-face',
  templateUrl: './admin-inter-face.component.html',
  styleUrls: ['./admin-inter-face.component.scss']
})
export class AdminInterFaceComponent implements OnInit {


  // Home Page Div
  adminRegistrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)]]
  })

  get firstName() {
    return this.adminRegistrationForm.get('firstName');
  }

  get lastName() {
    return this.adminRegistrationForm.get('lastName');
  }

  get email() {
    return this.adminRegistrationForm.get('email');
  }

  get password() {
    return this.adminRegistrationForm.get('password');
  }

  submitData(formData: User, event: Event) {
    this.registrationService.registerForm(formData).subscribe(
      data => {
        alert("User Registered Successfully")
        this.adminRegistrationForm.reset();
      },
      error => {
        console.log(error)
        alert("Something went rong!!")
        event.preventDefault();
      }
    )
  }

  //Get All product Div
  productList: any;
  catchId:string="";

  constructor(private fb: FormBuilder, private registrationService: RigistrationServiceService, private fetchData: ProductsService,private adminService:AdminInterFaceServiceService,private router:Router) { }

  ngOnInit(): void {
    this.fetchData.fetchProds().subscribe(
      (products) => {
        this.productList = products
        console.log(this.productList)
      }
    )
  }
  
  deleteProductCard(deleteDiv:HTMLElement){
    deleteDiv.style.display="block";
  }

  closeDelete(deleteDiv:HTMLElement){
    deleteDiv.style.display="none";
  }

  deleteProduct(productId:string){
    this.adminService.deleteProductFromDatabase(productId).subscribe(
      () =>this.ngOnInit()
    
      ,
      (err) => alert(err)
    )
    console.log(productId)
  }

  updateProductComp(showComp:HTMLElement){
    showComp.style.display="block";
  }

}
