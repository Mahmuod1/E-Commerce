import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  activeLink:any='';
  allProducts:any;
  productsList:IProduct[]=[];
  plusOrMins:boolean=false;
  productsCategory:ICategory[]=[
    {name:"iPhone",model:[
      {modelName:"IPhone 12 Min",type:["Cases","Wireless Charging","Cables","Power Sources"]},
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

  constructor(private productServer:ProductsService,private activatedRouter:ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe((params:ParamMap)=>{
      this.activeLink = params.get('type');
      this.allProducts=this.productServer.allProducts(this.activeLink);
      this.allProducts = this.productServer.allProducts(this.activeLink).subscribe(
        (products)=>{
          this.productsList = products;
          document.querySelector('.collapse .active')?.parentElement?.parentElement?.classList.add('show');
          document.querySelector('.collapse .active')?.parentElement?.parentElement?.previousElementSibling?.querySelector('.icon')?.firstElementChild?.classList.add('fa-minus')
          document.querySelector('.collapse .active')?.parentElement?.parentElement?.previousElementSibling?.querySelector('.icon')?.firstElementChild?.classList.remove('fa-plus')
        },
        (err)=>{
          console.log("e")
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

  togglePLus(ele:HTMLElement){

    ele.firstElementChild?.classList.toggle('fa-minus');
    ele.firstElementChild?.classList.toggle('fa-plus');

  }

}
