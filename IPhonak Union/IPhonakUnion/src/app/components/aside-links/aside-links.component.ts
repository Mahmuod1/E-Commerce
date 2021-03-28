import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/product';

@Component({
  selector: 'app-aside-links',
  templateUrl: './aside-links.component.html',
  styleUrls: ['./aside-links.component.scss']
})
export class AsideLinksComponent implements OnInit {
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
      {modelName:"AirPods Gen 1 & 2",type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]}
    ]
  },
  {name:"MacBook",model:[
    {modelName:'12" MacBooks',type:["Sleeves","Wireless Charging","Cables","Power Sources","Speakers"]},
    {modelName:'13" MacBooks',type:["Cases","Wireless Charging","Cables","Power Sources","Speakers"]}
  ]
}
  ];
  constructor() { }

  ngOnInit(): void {

  }

  togglePLus(ele:HTMLElement){
    ele.firstElementChild?.classList.toggle('fa-minus');
    ele.firstElementChild?.classList.toggle('fa-plus');
  }

}
