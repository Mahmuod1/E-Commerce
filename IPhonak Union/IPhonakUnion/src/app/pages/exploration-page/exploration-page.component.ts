import { ProductByNameService } from './../product-details/product-by-name.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-exploration-page',
  templateUrl: './exploration-page.component.html',
  styleUrls: ['./exploration-page.component.scss']
})
export class ExplorationPageComponent implements OnInit {
  customOptions: OwlOptions = {
    animateOut: 'fadeOut',
    loop: false,
    margin:100,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:false  ,
autoWidth:true,
  navText:[],
    navSpeed: 700,
    responsive: {
      0: {
       items:4


      },
      450: {
        items:4
      },
      740: {
        items: 4
      },
      940: {
        items:4
      },
      1200:{
        items:1
      }
    },
    nav: true
  }
  goPrev(owl:any){
    owl.prev()
  }
  goNext(owl:any){
  owl.next()
  }
  constructor(
    public activedRout:ActivatedRoute,
    public router:Router,
    private productService:ProductByNameService
    
    ) { }
  slidesStore:any;

// slideOne=[{
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },

// ]

// slideStores=[{
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'asdasdasd',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },
// {
//   img:'//cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_200x.png?v=1611857422 200w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_400x.png?v=1611857422 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_600x.png?v=1611857422 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_700x.png?v=1611857422 700w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_800x.png?v=1611857422 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_900x.png?v=1611857422 900w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1000x.png?v=1611857422 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/products/chilax_airpod_01_1200x.png?v=1611857422 1200w',
//   title:'Chillax Fox Case for AirPods Pro',
//   price:600,
//   category:'AirPODS Pro'
// },

// ]
dataShow:any;
products:any;
  ngOnInit(): void {
this.activedRout.paramMap.subscribe((param:ParamMap)=>{
this.dataShow= param.get('explore')
if(this.dataShow == 'best-sellers'){
this.productService.getBestSellersProduct().subscribe(product=>{
 this.products=product;
})
}
else{
  this.productService.getNewReleasesProduct().subscribe(product=>{
    this.products=product;
  })
}
})
  }

}
