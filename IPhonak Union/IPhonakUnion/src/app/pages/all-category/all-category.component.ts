import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.scss']
})
export class AllCategoryComponent implements OnInit {
  type:any;
  category:any;
  productsList:IProduct[]=[];
  errorMessage:string=''
  constructor(private activatedType:ActivatedRoute, private productsService:ProductsService) { }

  ngOnInit(): void {
    this.activatedType.paramMap.subscribe((params:ParamMap)=>{
      this.type = params.get('type');
      this.category = params.get('category')
      this.productsService.fetchProductType('http://localhost:4750/collection/products/category-type/'+this.category+'/'+this.type).subscribe(
        data=>{
          this.productsList = data;
          if (this.productsList.length == 0) {
            this.errorMessage = `COLLECTION ${this.category} / ${this.type}  IS EMPTY`
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
