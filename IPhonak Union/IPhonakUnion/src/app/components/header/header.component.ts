import { ProductByNameService } from './../../pages/product-details/product-by-name.service';
import { Component, ElementRef, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/cart/cart.service';
import { SearchResultComponent } from 'src/app/pages/search-result/search-result.component';
import { IProduct, IProductSearch } from 'src/app/shared/product';
import IUser from 'src/app/shared/user';
import { ProductsService } from '../products/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(SearchResultComponent)
  searchRe!:SearchResultComponent;
  @ViewChildren('toggleBtn')
  toggleBtn!: QueryList<ElementRef>;
  allProducts;
  // Start Cart Variables
  cartStyle='transform: translateX(100%);';
  user:IUser[]|any=[{
    firstName:'',
    lastName:'',
    password:'',
    email:'',
    cart:[]
  }]
  isQuantityExceed=false
  items=0;
  total=0;
  numOfItems=0
  // End of Cart Variables
  productsList:IProduct[]=[{images: ["//cdn.shopify.com/s/files/1/0066/9050/4822/products/clic_01.jpg?v=1610401030",],quantity: [
    {srcColor: "https://cdn.shopify.com/s/files/1/0066/9050/4822/files/green_sapin_50x.progressive.png.jpg?v=1607981018&15028",
        srcImage: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/mini_green.png?v=1607996461",
        quantity: 44}],
description: [
    "Add character and protection that’ll last in a unique blend of the finest Italian leathers, fully wrapped by hand and finished with gold accents for a vintage inspired look that’s distinctly modern.",
    "Crafted with an elegant blend of smooth & cross-grained Italian leathers",
    "Designed to age beautifully with a patina uniquely yours",
    "Refined fully wrapped finish in a slim form",
    "Raised edges for screen & camera protection",
    "Velvety interior for extra care",
    "Compatible with wireless & MagSafe charging"
],
productName: "CLIC HERITAGE (IPHONE 12 MINI)",
price: 1350,
category: "IPhone",
type: {
    model: "IPhone 12 Min",
    type: "Cases"
},
rating: 4}];

  productsSearch:IProductSearch[]=[];
  screenMdActive = false;
  plusOrMins = false;
  searchMod=false;
  SearchValue=''
  constructor
  (private productServer:ProductsService,
   private router:Router,
  private cartService:CartService,
  public product:ProductByNameService
    ) {
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
    this.cartService.cartItems.subscribe(items=>{

      this.items=items
    })
    this.cartService.cartStyle.next(this.cartStyle)
    this.cartService.cartStyle.subscribe(style=>{

      this.cartStyle=style;



    })

    const userId= this.cartService.getUserToken()
    this.cartService.getUserFromDataBase().subscribe(user=>{
      this.cartService.subscriptProduct.next(user)
      this.cartService.subscriptProduct.subscribe(user=>{
        this.user=user;
        this.total= this.updateTotalPrice()

      })



    })


  }

  // Start Cart Functions

  updateTotalPrice(){
    this.items=0;
    this.total=0;
    this.user[0].cart.forEach((cart:any) => {
    this.total+=(cart.price * cart.quantity)
    this.items++;
    this.cartService.cartItems.next(this.items)
    });
    return this.total;
  }


  deleteProductFromCart(productName:any){
   this.cartService.removeProductFromCart(this.user[0].cart,productName);

  this.cartService.updateUserCart({cart:this.user[0].cart}).subscribe(user=>{
    this.cartService.getUserFromDataBase().subscribe(user=>{
      this.user=user;
    this.total=  this.updateTotalPrice()
      })
  })
  }

  addQuantity(quantity:number,productInCart:any,e:any){
   let productQuantity;
  this.product.getProductByName(productInCart.productName).subscribe((product:any)=>{
  productQuantity=product[0].quantity[productInCart.imgIndex].quantity
  if(quantity==productQuantity){
    e.target.classList.add('finished')
    e.target.classList.remove('notFinished')
    this.isQuantityExceed=true
  }

  else{
    quantity++;
    productInCart.quantity=quantity;

    this.cartService.addToCart(this.user[0].cart,productInCart)
    this.cartService.updateUserCart({cart:this.user[0].cart}).subscribe(user=>{
    })
    this.updateTotalPrice();

  }

  })
  }
  minQuantity(quantity:number,productInCart:any,add:any){
    let productQuantity;
   this.product.getProductByName(productInCart.productName).subscribe((product:any)=>{
   productQuantity=product[0].quantity[productInCart.imgIndex].quantity
   if(quantity<=1){
  const wouldRemoved=confirm('Are You want to remove the product from Cart')
    if(wouldRemoved){
      this.deleteProductFromCart(productInCart.productName)
    }
   }
   else{

   if(quantity<=productQuantity){
    add.classList.remove('finished')
    add.classList.add('notFinished')
    this.isQuantityExceed=true
  }
     quantity--;
     productInCart.quantity=quantity;

     this.cartService.addToCart(this.user[0].cart,productInCart)
     this.cartService.updateUserCart({cart:this.user[0].cart}).subscribe(user=>{
       console.log(user,'user modified')
     })
     this.updateTotalPrice();

   }

   })


   }


navigateToCartPage(){
  this.router.navigate(['cart-page'])
  this.cartService.cartStyle.next('transform: translateX(100%)')
}




  // End Cart Functions
  openSearchBox(){
    this.searchMod = true;
    this.screenMdActive = false;
    document.body.style.overflow = "hidden"
  }
  closeSearchBox() {
    this.searchMod = false;
  }
  openMenu(){
    this.screenMdActive= !this.screenMdActive;
    if (this.screenMdActive == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  togglePLus(toggleBtn:HTMLElement){

    toggleBtn.classList.toggle('minus')
    this.plusOrMins = !this.plusOrMins
  }
  search(){
    this.productsSearch = [];
    this.productsList.filter(product=>{
      if (this.SearchValue !== ''){
        if(product.productName.includes(this.SearchValue.toLocaleUpperCase())){
          this.productsSearch.push({name:product.productName,image:product.quantity[0].srcImage,price:product.price});
        }
      }else if(this.SearchValue === '') {
        this.productsSearch=[ ]
      }
    })
  }
  saveSearchData() {
    localStorage.setItem('searchList',JSON.stringify(this.productsSearch))
    localStorage.setItem('searchKey',JSON.stringify(this.SearchValue))
    this.searchMod = false;
    this.SearchValue = '';
    document.body.style.overflow = "auto";
  }
  showCart(cart:HTMLElement){
    this.cartService.cartStyle.next('transform: translateX(0)')
    /* cart.style.transform= 'translateX(0%)'; */
  }

  closeCart(cart:HTMLElement){
    this.cartStyle='transform: translateX(100%)';
   this.cartService.cartStyle.next('transform: translateX(100%)')
   /* cart.style.transform= 'translateX(100%)'; */
  }




}
