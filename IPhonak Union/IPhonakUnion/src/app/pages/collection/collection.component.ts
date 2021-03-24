import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products/products.service';
import { ICategory, IProduct } from 'src/app/shared/product';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  activetype:any='';
  activeMedol:any='';
  productsCategory:ICategory[]=[
    {name:"iPhone",model:[
      {modelName:"IPhone 12 Min",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"IPhone 12",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 12 Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},{modelName:"iPhone 12 Pro Max",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11 Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone 11 Pro Max",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone Xs",type:["Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"iPhone XR",type:["Wireless Charging","Cables","Power Sources","Speakers"]}

    ]
  },
    {name:"AirPods",model:[
      {modelName:"AirPods Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]},
      {modelName:"AirPods Pro",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]}
    ]
  }
  ];
  productsList:IProduct[]=[];
  errorMessage:string= '';
  constructor(private collection: ProductsService,private activetedType: ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    // let activequerytype = this.activetedType.snapshot.queryParamMap.get('type');
    // let activequerymodel = this.activetedType.snapshot.queryParamMap.get('model');

    this.activetedType.paramMap.subscribe((params:ParamMap)=>{
      this.activetype = params.get('model')
      this.activeMedol = params.get('type')
      console.log("type",this.activetype)
      console.log("medol",this.activeMedol)
      this.collection.fetchProductType('http://localhost:4750/collection/products/'+this.activeMedol+"/"+this.activetype).subscribe(
        (data)=>{
          if(data){
          this.productsList = data
          console.log(this.productsList)
          // console.log(activequeryParams)
        }
      },
      (err)=>{
        console.log('err')
        console.log(err)
      }
    )
    })

  }

  changeImage(productImg:any,colorIndex:number,productIndex:number){
    for (var i = 0; i < productImg.parentElement.children.length; i++){
      productImg.parentElement.children[i].classList.remove('active')
    }
    productImg.classList.add('active');
    let image = this.productsList[productIndex].quantity[colorIndex].srcImage;
    productImg.parentElement.previousElementSibling.parentElement.querySelector('img').setAttribute('src',image)
  }
  togglePLus(ele:HTMLElement){
    ele.firstElementChild?.classList.toggle('fa-minus');
    ele.firstElementChild?.classList.toggle('fa-plus');
  }
  roterNa(type:any,medol:any){
    // console.log("type",type)
    // console.log("medol",medol)
    // this.router.navigate(['/collection',[medol,type]])
  }
}
