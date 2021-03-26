import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
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
  const userId=JSON.parse(this.getUserToken())
 return this._http.get(this._url+userId).pipe(
catchError((error)=>{
  return throwError(error.message)
})
 )

}

updateUserCart(user:any){
  const userId=JSON.parse(this.getUserToken())
  return this._http.put('http://localhost:4750/account/users/update/'+userId,user).pipe(
    catchError(error=>{
      return throwError(error.message)
    })
  )
}


getUserToken(){
  const token= localStorage.getItem('token');
  const user_id=token!.split('.')[1];
  console.log(token?.split('.')[1])
  const id=window.atob(user_id).split(',')[0].split(':')[1]
 return id;
}


}
