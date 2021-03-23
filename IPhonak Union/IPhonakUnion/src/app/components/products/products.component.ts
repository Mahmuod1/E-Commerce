import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ICategory, IProduct } from 'src/app/shared/product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChildren('iconContainer')
  iconContainer!: QueryList<ElementRef>;

  allProducts;
  productsList:IProduct[]=[];
  plusOrMins:boolean=false;
  productsCategory:ICategory[]=[
    {name:"iPhone",model:[
      {modelName:"IPhone 12 Min",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"IPhone 12",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 12 Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},{modelName:"iPhone 12 Pro Max",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11 Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11 Pro Max",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone Xs",type:["Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone XR",type:["Wireless Charging","Cables","Power Sources","Speakers"]}

    ]
  },
    {name:"AirPods",model:[
      {modelName:"AirPods Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"AirPods Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]}
    ]
  }
  ];

  constructor(private productServer:ProductsService) {
    this.allProducts=productServer.fetchProds();
    this.allProducts.subscribe(
      (products)=>{
        this.productsList = products;
      },
      ()=>{
        console.log("e")
      }
    )
  }

  ngOnInit(): void {


    document.querySelector('.collapse .active')?.parentElement?.classList.add('show');
    document.querySelector('.collapse .active')?.parentElement?.previousElementSibling?.querySelector('.fas')?.classList.remove('fa-plus');
    document.querySelector('.collapse .active')?.parentElement?.previousElementSibling?.querySelector('.fas')?.classList.add('fa-minus');
  }


  changeImage(productImg:any,colorIndex:number,productIndex:number){
    for (var i = 0; i < productImg.parentElement.children.length; i++){
      productImg.parentElement.children[i].classList.remove('active')
    }
    productImg.classList.add('active');
    let image = this.productsList[productIndex].quantity[colorIndex].srcImage;
    productImg.parentElement.previousElementSibling.parentElement.querySelector('img').setAttribute('src',image)
  }

  togglePLus(ele:HTMLElement){

    ele.firstElementChild?.classList.toggle('fa-minus');
    ele.firstElementChild?.classList.toggle('fa-plus');

  }

}
