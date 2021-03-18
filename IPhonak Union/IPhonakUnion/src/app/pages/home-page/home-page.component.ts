import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slidesStore=[{
    title:'slide1',
    id:'1',
    src:'//cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_400x.jpg?v=1612203325 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_600x.jpg?v=1612203325 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_800x.jpg?v=1612203325 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_1000x.jpg?v=1612203325 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_1200x.jpg?v=1612203325 1200w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_1400x.jpg?v=1612203325 1400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_1600x.jpg?v=1612203325 1600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/chillax-fox-home-hero_1800x.jpg?v=1612203325 1800w'
    ,alt:'alting'
  },
  {
    title:'slide1',
    id:'2',
    src:'//cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_400x.jpg?v=1610477859 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_600x.jpg?v=1610477859 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_800x.jpg?v=1610477859 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_1000x.jpg?v=1610477859 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_1200x.jpg?v=1610477859 1200w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_1400x.jpg?v=1610477859 1400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_1600x.jpg?v=1610477859 1600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/home-banner-1.13.21_1800x.jpg?v=1610477859 1800w'
    ,alt:'alting'
  }
,{
  title:'slide1',
  id:'3',
  src:'//cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_400x.jpg?v=1609802715 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_600x.jpg?v=1609802715 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_800x.jpg?v=1609802715 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_1000x.jpg?v=1609802715 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_1200x.jpg?v=1609802715 1200w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_1400x.jpg?v=1609802715 1400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_1600x.jpg?v=1609802715 1600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/bundle-crop2_1800x.jpg?v=1609802715 1800w'
  ,alt:'alting'
},
{
  title:'slide1',
  id:'4',
  src:'//cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_400x.jpg?v=1606844875 400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_600x.jpg?v=1606844875 600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_800x.jpg?v=1606844875 800w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_1000x.jpg?v=1606844875 1000w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_1200x.jpg?v=1606844875 1200w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_1400x.jpg?v=1606844875 1400w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_1600x.jpg?v=1606844875 1600w, //cdn.shopify.com/s/files/1/0066/9050/4822/files/HOME_cable_1800x.jpg?v=1606844875 1800w'
  ,alt:'alting'
}
]



  animateRight='';
  animateLeft=''
  moveIn(){
this.animateLeft='animate__bounceInRight'
  }
  moveOut(){
    this.animateLeft=''
  }
  moveRight(){
    this.animateRight='animate__bounceInLeft'
  }
moveFromRight(){
  this.animateRight=''
}



customOptions: OwlOptions = {
  animateOut: 'fadeOut',
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  autoplay:true  ,
  autoplayMouseleaveTimeout:2000,
  autoplaySpeed:1000,
navText:[],
  navSpeed: 700,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items:1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    },
    1200:{
      items:1
    }
  },
  nav: false
}
goPrev(owl:any){
  owl.prev()
}
goNext(owl:any){
owl.next()
}

}

