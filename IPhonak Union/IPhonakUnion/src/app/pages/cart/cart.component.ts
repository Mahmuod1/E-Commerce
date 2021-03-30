import { ProductByNameService } from './../product-details/product-by-name.service';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import IUser from '../../shared/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,public product:ProductByNameService) { }
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
ngOnInit(): void {




   const userId= this.cartService.getUserToken()
this.cartService.getUserFromDataBase().subscribe(user=>{
this.user=user;
this.updateTotalPrice()
})

  }

updateTotalPrice(){
  this.items=0
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


}
