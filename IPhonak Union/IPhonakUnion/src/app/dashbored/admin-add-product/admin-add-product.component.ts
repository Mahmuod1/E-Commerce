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

    quantity: this.fb.group({
      quantity: [''],
      srcColor: [''],
      srcImage: ['']
    }),
    alternativeQuantity: this.fb.array([]),

    type: this.fb.group({
      model: [''],
      type: ['']
    }),
    alternativeType: this.fb.array([]),

    rating: [''],
    description: [''],
    alternativeDescription: this.fb.array([]),

    images: [''],
    alternativeImages: this.fb.array([]),

  });

  get alternativeQuantity() {
    return this.registerationForm.get('alternativeQuantity') as FormArray;
  }

  get alternativeType() {
    return this.registerationForm.get('alternativeType') as FormArray;
  }

  get alternativeDescription() {
    return this.registerationForm.get('alternativeDescription') as FormArray;
  }

  get alternativeImages() {
    return this.registerationForm.get('alternativeImages') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewQuantity() {
    this.alternativeQuantity.push(this.fb.control(''))
  }
  removeQuantity(i: any) {
    this.alternativeQuantity.removeAt(i);
  }


  addNewType() {
    this.alternativeType.push(this.fb.control(''))
  }
  removeType(i: any) {
    this.alternativeType.removeAt(i);
  }


  addNewDescription() {
    this.alternativeDescription.push(this.fb.control(''))
  }
  removeDescription(i: any) {
    this.alternativeDescription.removeAt(i);
  }


  addNewImages() {
    this.alternativeImages.push(this.fb.control(''))
  }
  removeImages(i: any) {
    this.alternativeImages.removeAt(i);
  }


}
