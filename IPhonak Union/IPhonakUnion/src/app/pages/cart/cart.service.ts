import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
product:any=''
subscriptProduct=new BehaviorSubject(this.product)
style='transform:translateX(100%)'
cartStyle=new BehaviorSubject(this.style)

items=0
cartItems=new BehaviorSubject(this.items)





addToCart(cart:any,productAddedToCart:any){
  const isInCart= cart.some((product:any,index:any)=>{
return product.productName == productAddedToCart.productName
  })

  if(isInCart){

    this.updateCart(cart,productAddedToCart);

    console.log(isInCart,'in if statement')

  }else{

    console.log(isInCart,'in else statement')

    cart.push(productAddedToCart)

  }

}
updateCart(cart:any,updatedProduct:any){
 let productIndex=cart.findIndex((product:any)=>{
return product.productName == updatedProduct.productName;
  }
  )
  cart[productIndex]=updatedProduct;
}
removeProductFromCart(cart:any,removedProduct:any){
let productIndex = cart.findIndex((product:any)=>{
  return product.productName == removedProduct.productName
})
 cart.splice(productIndex,1)
}



getAllCart(cart:any){
return cart;
}
_url='http://localhost:4750/account/users/get/'
getUserFromDataBase(){
  if(this.getUserToken() !==''){
    const userId:string=JSON.parse(this.getUserToken())

    return this._http.get(this._url+userId).pipe(
   catchError((error)=>{
     return throwError(error.message)
   })
    )
  }
else{
  return throwError('user Not Login')
}

}
total=0;
user:any;

updateTotalPrice(){
  this.items=0;
  this.total=0;
  this.getUserFromDataBase().subscribe((user:any)=>{
    this.user=user;
  })
  this.user[0].cart.forEach((cart:any) => {
  this.total+=(cart.price * cart.quantity)
  this.items++;
  this.cartItems.next(this.items)
  });
  return this.total;
}

updateUserCart(user:any){
  if(!this.getUserToken()){
return throwError('error')
  }
else{
  const userId=JSON.parse(this.getUserToken())
  return this._http.put('http://localhost:4750/account/users/update/'+userId,user).pipe(
    catchError(error=>{
      return throwError(error.message)
    })
  )
}
}


getUserToken(){
  const token= localStorage.getItem('token');
  if(token !== null){
    const user_id=token!.split('.')[1];
    console.log(token?.split('.')[1])
    const id=window.atob(user_id).split(',')[0].split(':')[1]
   return id;
  }
else{
  return ''
}
}


}
