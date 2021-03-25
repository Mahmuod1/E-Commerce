import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
user:any;
con(n:any){
  console.log('working')
  console.log(n)
}

  ngOnInit(): void {
    this.con(1);
   const userId= this.cartService.getUserToke()
   console.log(userId,'id')
this.cartService.getUserFromDatabase('asdfsdf@gmai.com').subscribe((user)=>{
this.user=user;
console.log(this.user,'user')
})
  }

cart=[{productName: "CLIC CLASSIC (IPHONE 12 MINI)", image: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/Family_classic2.jpg?v=1605211269", price: 840, quantity: 5},{productName: "CLIC CLASSIC (IPHONE 12 MINI)", image: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/Family_classic2.jpg?v=1605211269", price: 840, quantity: 5},{productName: "CLIC CLASSIC (IPHONE 12 MINI)", image: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/Family_classic2.jpg?v=1605211269", price: 840, quantity: 5},{productName: "CLIC CLASSIC (IPHONE 12 MINI)", image: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/Family_classic2.jpg?v=1605211269", price: 840, quantity: 5},{productName: "CLIC CLASSIC (IPHONE 12 MINI)", image: "//cdn.shopify.com/s/files/1/0066/9050/4822/products/Family_classic2.jpg?v=1605211269", price: 840, quantity: 5}]




}
