import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  allProducts;
  productsList:any;

  constructor(private productServer:ProductsService) {
    this.allProducts=productServer.fetchProds();
   }

  ngOnInit(): void {

    this.allProducts.subscribe(
      (products)=>{
        console.log(products);
        this.productsList = products;
      },
      ()=>{
        console.log("e")
      }
    )
  }
  changeImage(productImg:any,colorIndex:number,productIndex:number){
    for (var i = 0; i < productImg.parentElement.children.length; i++){
      productImg.parentElement.children[i].classList.remove('active')
    }
    productImg.classList.add('active');
    console.log(productImg.parentElement.previousElementSibling.parentElement.querySelector('img'))
    let image = this.productsList[productIndex].images[colorIndex];
    console.log(colorIndex,productIndex)
    productImg.parentElement.previousElementSibling.parentElement.querySelector('img').setAttribute('src',image)

  }
}
