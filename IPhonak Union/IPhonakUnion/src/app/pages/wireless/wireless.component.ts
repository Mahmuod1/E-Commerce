import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
import { IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-wireless',
  templateUrl: './wireless.component.html',
  styleUrls: ['./wireless.component.scss']
})
export class WirelessComponent implements OnInit {
  kind:any=''
  errorMessage:string=''
  productsList:IProduct[]=[];
  constructor(private activatedParams:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedParams.paramMap.subscribe((params:ParamMap)=>{
      this.kind = params.get('kind');
      this.productService.fetchProductType('http://localhost:4750/collection/products/kind/'+this.kind).subscribe(
        products=>{
          this.productsList = products;
          if (this.productsList.length == 0) {
            this.errorMessage = `COLLECTION ${this.kind} IS EMPTY`
          }
        }
      )
      document.querySelector('.collapse .active')?.parentElement?.parentElement?.classList.add('show');
          document.querySelector('.collapse .active')?.parentElement?.parentElement?.previousElementSibling?.querySelector('.icon')?.firstElementChild?.classList.add('fa-minus')
          document.querySelector('.collapse .active')?.parentElement?.parentElement?.previousElementSibling?.querySelector('.icon')?.firstElementChild?.classList.remove('fa-plus')
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
