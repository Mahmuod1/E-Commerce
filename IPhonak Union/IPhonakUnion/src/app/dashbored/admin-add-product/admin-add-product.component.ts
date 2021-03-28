import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {

  registerationForm = this.fb.group({

    productName: [''],
    price: [''],
    category: [''],

    quantity: this.fb.array([
      {
        quantity: [''],
        srcColor: [''],
        srcImage: ['']
      }
    ]),

    type: this.fb.group({
      model: [''],
      type: [''],
      knid:['']
    }),
    /* alternativeType: this.fb.array([]), */

    rating: [''],
    description: this.fb.array([]),

    
    images: this.fb.array([]),

  });

  get quantity() {
    return this.registerationForm.get('quantity') as FormArray;
  }

  /* get alternativeType() {
    return this.registerationForm.get('alternativeType') as FormArray;
  } */

  get description() {
    return this.registerationForm.get('description') as FormArray;
  }

  get images() {
    return this.registerationForm.get('images') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewQuantity() {
    this.quantity.push(this.fb.control(''))
  }
  removeQuantity(i: any) {
    this.quantity.removeAt(i);
  }


  /* addNewType() {
    this.alternativeType.push(this.fb.control(''))
  }
  removeType(i: any) {
    this.alternativeType.removeAt(i);
  }
 */

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


}
