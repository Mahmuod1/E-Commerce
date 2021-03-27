import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-type-model',
  templateUrl: './type-model.component.html',
  styleUrls: ['./type-model.component.scss']
})
export class TypeModelComponent implements OnInit {
  model:any;
  productsList:IProduct[]=[]
  errorMessage:string=''
  constructor(private ActivatedModel:ActivatedRoute,private productService:ProductsService) { }

  ngOnInit(): void {
    this.ActivatedModel.paramMap.subscribe((params:ParamMap)=>{
      this.model = params.get('model');
      console.log(this.model)
      this.productService.fetchProductType('http://localhost:4750/collection/products/model/'+this.model).subscribe(
        product=>{
          this.productsList = product
          if (this.productsList.length == 0) {
            this.errorMessage = `COLLECTION ${this.model} IS EMPTY`
          }
        }
      )
    })
  }
  changeImage(productImg:any,colorIndex:number,productIndex:number){
    for (var i = 0; i < productImg.parentElement.children.length; i++){
      productImg.parentElement.children[i].classList.remove('active')
    }
    productImg.classList.add('active');
    let image = this.productsList[productIndex].quantity[colorIndex].srcImage;
    productImg.parentElement.previousElementSibling.parentElement.querySelector('img').setAttribute('src',image)
  }
}
