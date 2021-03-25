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

getUserFromDatabase(id:any)
{
  return this._http.request('GET','http://localhost:4750/account/users/'+id+'/get',
  ).pipe(
    catchError(error=>{
      return throwError(error.message)
    })
  )
}
getUserToke(){
  const token= localStorage.getItem('token');
  const user_id=token!.split('.')[1];
  console.log(token?.split('.')[1])
  const id=window.atob(user_id).split(',')[0].split(':')[1]
 return id;
}


}
