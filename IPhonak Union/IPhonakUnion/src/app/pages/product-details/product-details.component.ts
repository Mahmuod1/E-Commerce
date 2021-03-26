import { CartService } from './../cart/cart.service';
import { ProductsService } from './../../components/products/products.service';
import { IProduct } from './../../shared/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductByNameService } from './product-by-name.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productByName: ProductByNameService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService:CartService
  ) { }

imageColorIndex=0;
  quantityIsExceed=false;
  recommendedProducts: any;
  quantity = 1;
  isLoaded = false;
  addToCard = 'addToCard'
  productName: any;
  product: IProduct | any;
  // when Initial the Component
  user:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((product: ParamMap) => {
      this.productName = product.get('productName')


      this.productByName.getProductByName(this.productName).subscribe(product => {
        if (product) {

          this.isLoaded = true;
        }

        this.product = product;
      })
    })
    this.productByName.getNewReleasesProducts().subscribe(products => {
      this.recommendedProducts = products;

    })
    this.cartService.getUserFromDataBase().subscribe(user=>{
      this.user=user;
    })

  }

  // After Initial the Component
  customOptions: OwlOptions = {
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: false,
    autoplayMouseleaveTimeout: 2000,
    autoplaySpeed: 1000,
    navText: [],
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: false
  }
  goPrev(owl: any) {
    owl.prev()
  }
  goNext(owl: any) {
    owl.next()
  }

  customOptionsSmallSlider: OwlOptions = {
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 2,

    autoplay: false,
    autoplayMouseleaveTimeout: 2000,
    autoplaySpeed: 1000,
    navText: [],
    navSpeed: 700,
    responsive: {
      0: {
        items: 4
      },
      450: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: false
  }

  goPrevSmallSlider(owl: any) {
    owl.prev()
  }

  goNextSmallSlider(owl: any) {
    owl.next()
  }

  show(e: any) {
    console.log(e.target.getAttribute('src'))

  }

  showSmallSlider(e: any) {
    let src = e.target.getAttribute('src')
    this.product[0].images[0] = src
  }

  replaceImage(colorIndex: any) {
this.imageColorIndex=colorIndex;
    this.product[0].images[0] = this.product[0].quantity[colorIndex].srcImage;
    this.quantity=1;
  }

  customOptionsRec: OwlOptions = {
    animateOut: 'fadeOut',
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 100,

    autoplay: false,
    autoplayMouseleaveTimeout: 2000,
    autoplaySpeed: 1000,
    navText: [],
    navSpeed: 700,
    responsive: {
      0: {
        items: 4
      },
      1500: {
        items: 4
      },
      3000: {
        items: 4
      },
      940: {
        items: 1
      },
      1200: {
        items: 1
      }
    },
    nav: false
  }
  goPrevRec(owl: any) {
    owl.prev()
  }
  goNextRec(owl: any) {
    owl.next()
  }
  addQuantity(e: any) {
    const productQuantity = this.product[0].quantity[this.imageColorIndex].quantity;
    if (this.quantity >= productQuantity) {
      e.target.classList.remove('notFinished')
      e.target.classList.add('finished')
      this.quantityIsExceed=true;
    }
    else {
      if(this.quantity < productQuantity){
        e.target.classList.add('notFinished')
        e.target.classList.remove('finished')
      }

      this.quantity++;
      this.quantityIsExceed=false;
    }
  }

minQuantity(e: any,add:any) {
    if (this.quantity <= 1) {
      this.quantity = 1;
    }
    else {
      this.quantity--;
      this.quantityIsExceed=false;
if(this.quantity<=this.product[0]?.quantity[this.imageColorIndex].quantity){
  add.classList.add('notFinished')
  add.classList.remove('finished')

}
    }


  }



addToCartFromDetailsPage(product:any){
  // this.productByName.getUserToke();
  this.cartService.addToCart(this.user[0].cart,product);
  console.log(this.user[0])
 try {

  this.cartService.updateUserCart({cart:this.user[0].cart}).subscribe(user=>{
    console.log(user)

  })
 } catch (error) {
   console.log(error)
 }

}



}
