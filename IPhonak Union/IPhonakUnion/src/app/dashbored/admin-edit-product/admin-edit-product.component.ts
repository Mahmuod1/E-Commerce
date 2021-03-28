import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IQuantity } from 'src/app/classes/user';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  @Input() parentProductData: any;

  constructor(private fb: FormBuilder) { }
  /* productUpdateForm!:FormGroup */

  ngOnInit(): void {

    console.log(this.parentProductData)

    this.productUpdateForm.patchValue({
      productName: this.parentProductData.productName,
      category: this.parentProductData.category,
      price: this.parentProductData.price,
      rating: this.parentProductData.rating,
      type: this.parentProductData.type,
      images:[this.parentProductData.images]
      
    })


  }

  /* ngAfterViewInit(){
    this.parentProductData.map((d:IQuantity) =>
    this.quantity.push(this.fb.group({quantity: d.quantity, srcColor: d.srcColor, srcImage:d.srcImage }))
  );
  } */

  /* get quantity() {
    return this.parentProductData.get("quantity") as FormArray;
  } */

  //Update Product
  productUpdateForm = this.fb.group({
    productName: [''],
    category: [''],
    price: [''],
    rating: [''],

    type: this.fb.group({
      model: [''],
      type: [''],
      kind: ['']
    }),


    quantity: this.fb.group({
      quantity: [''],
      srcColor: [''],
      srcImage: [''],
    }),

    images: this.fb.array([]),
    description: this.fb.array([])
  })


  addFormContols(controls: any) {

  }

}
