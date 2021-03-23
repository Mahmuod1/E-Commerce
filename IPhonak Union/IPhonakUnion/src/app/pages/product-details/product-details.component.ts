import { ProductsService } from './../../components/products/products.service';
import { IProduct } from './../../shared/product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductByNameService } from './product-by-name.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
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
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((product: ParamMap) => {
      console.log(product)
      this.productName = product.get('productName')


      this.productByName.getProductByName(this.productName).subscribe(product => {
        console.log(this.isLoaded)
        if (product) {

          this.isLoaded = true;
          console.log(this.isLoaded)
        }

        this.product = product;
        console.log(this.product[0].images)
      })
    })
    this.productByName.getNewReleasesProducts().subscribe(products => {
      this.recommendedProducts = products;
      console.log(this.recommendedProducts[0].images[0], 'image')

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
    console.log(e.target.getAttribute('src'), 'src')
    let src = e.target.getAttribute('src')
    this.product[0].images[0] = src
    console.log(this.product[0].images[0], 'main')
    console.log(src)
  }

  replaceImage(colorIndex: any) {
console.log(this.product[0].quantity,'image color')
this.imageColorIndex=colorIndex;
    this.product[0].images[0] = this.product[0].quantity[colorIndex].srcImage;
    this.quantity=1;
    console.log(this.imageColorIndex,'colorized')
    console.log(this.product[0].quantity[this.imageColorIndex].quantity,'quantity')
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
      console.log(this.imageColorIndex,'index in add')

      console.log(this.product[0].quantity[this.imageColorIndex].quantity)
      console.log(e.target.classList)
      this.quantity++;
      this.quantityIsExceed=false;
    }
  }

minQuantity(e: any,add:any) {
console.log(add)
console.log(add.classList)
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
console.log(this.imageColorIndex,'index in min')
    }


  }

}
