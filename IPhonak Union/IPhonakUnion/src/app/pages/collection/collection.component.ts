import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  activeParamsType:any='';
  activeMedol:any='';
  productsList:IProduct[]=[];
  errorMessage:string= '';
  constructor(private collection: ProductsService,private activetedType: ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    this.activetedType.paramMap.subscribe((params:ParamMap)=>{
      this.activeMedol = params.get('model')
      this.activeParamsType = params.get('type')
      this.collection.fetchProductType('http://localhost:4750/collection/products/full-type/'+this.activeMedol+"/"+this.activeParamsType).subscribe(
        (data)=>{
          if(data){
            this.productsList = data
            if (this.productsList.length == 0) {
              this.errorMessage = `COLLECTION ${this.activeMedol} / ${this.activeParamsType} IS EMPTY`
            }
        }
      },
      (err)=>{
        console.log('err')
        console.log(err)
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
