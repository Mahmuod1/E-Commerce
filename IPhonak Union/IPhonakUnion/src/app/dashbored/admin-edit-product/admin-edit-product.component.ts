import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  @Input() parentProductData:any;
  productUpdateForm:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.productUpdateForm=this.fb.group({
      productName:[this.parentProductData.productName],
      category:[this.parentProductData.category],
      price:[this.parentProductData.price],
      rating:[this.parentProductData.rating],
  
      type:this.fb.group({
        model:[this.parentProductData.type.model],
        type:[this.parentProductData.type.type],
        kind:[this.parentProductData.type.kind]
      }),
  
      quantity:this.fb.group({
        quantity:[this.parentProductData.quantity],
        srcColor:[this.parentProductData.quantity],
        srcImage:[this.parentProductData.quantity]
      }),
  
      images:[[]],
      description:[[]]
    })
  
    
      /* this.productUpdateForm.patchValue({
        productName:this.parentProductData.productName,
        category:this.parentProductData.category,
        price:this.parentProductData.price,
        rating:this.parentProductData.rating,
        type:this.parentProductData.type
        
      }) */
  }

  //Update Product
 
  addFormContols(controls: any){
    
  }

}
