export interface IProduct {
  productName:string,
  price:number,
  category:string,
  quantity:[
    {
      quantity:number,
      srcColor:string,
      srcImage:string
    }
  ],
  type:{
    model:string,
    type:string
  },
  rating:number,
  description:string[],
  images:string[]
}

export interface ICategory{
  name:string,
  model:{modelName:string,type:string[]}[]

}

export interface IProductSearch {
  name:string,
  image:any,
  price:number
}
