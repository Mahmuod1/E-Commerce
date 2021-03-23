import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultComponent } from 'src/app/pages/search-result/search-result.component';
import { IProduct, IProductSearch } from 'src/app/shared/product';
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
  constructor(private productServer:ProductsService,private router:Router) {
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
  }
  openSearchBox(){
    this.searchMod = true;
    this.screenMdActive = false;
    document.body.style.overflow = "hidden"
    console.log(this.searchMod)
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
    // let searchKey = localStorage.getItem('searchKey')
    // let searchKeyPars = JSON.parse(searchKey?searchKey:'')
    // this.router.navigate(['search',searchKeyPars]);
    this.searchMod = false;
    this.SearchValue = '';
    document.body.style.overflow = "auto";
    if (location.pathname === '/search'){
      location.reload()
      console.log('don')
    }
  }
}
