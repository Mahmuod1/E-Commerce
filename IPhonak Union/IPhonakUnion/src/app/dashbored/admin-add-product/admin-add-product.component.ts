import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminInterFaceServiceService } from '../admin-inter-face/admin-inter-face-service.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {

  addProductForm = this.fb.group({

    productName: [''],
    price: [''],
    category: [''],

    quantity: this.fb.array([
      this.fb.group({
        quantity: new FormControl(''),
        srcColor: new FormControl(''),
        srcImage: new FormControl('')
      })
    ]),

    type: this.fb.group({
      model: [''],
      type: [''],
      kind:['']
    }),
    rating: [''],
    description: this.fb.array([]),  
    images: this.fb.array([]),
  });

  get quantity() {
    return this.addProductForm.get('quantity') as FormArray;
  }

  get description() {
    return this.addProductForm.get('description') as FormArray;
  }

  get images() {
    return this.addProductForm.get('images') as FormArray;
  }

  constructor(private fb: FormBuilder,private adminService:AdminInterFaceServiceService) { }

  ngOnInit(): void {
  }

  addNewQuantity() {
    this.quantity.push(this.fb.group({quantity:0,srcColor:'',srcImage:''}))
  }

  removeQuantity(i: any) {
    this.quantity.removeAt(i);
  }

  addNewDescription() {
    this.description.push(this.fb.control(''))
  }

  removeDescription(i: any) {
    this.description.removeAt(i);
  }

  addNewImages() {
    this.images.push(this.fb.control(''))
  }

  removeImages(i: any) {
    this.images.removeAt(i);
  }

  submitData(formData:any,event:Event):void{
    this.adminService.AddProductToDatabase(formData).subscribe(
      data => {
        alert("Produt Add successfully")
        this.addProductForm.reset();
      },
      error => {
        event.preventDefault();
      }
    )
  }
}
