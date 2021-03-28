export class User {
    constructor(
        public firstName:any,
        public lastName:any,
        public email:any,
        public password:any,
    ){}
}

export interface ILogin{
    email:string,
    password:string,
    token:string
}

export interface IProfile{
    firstName:string,
    lastName:string,
    email:string
}

export interface IQuantity{
    quantity:number,
    srcColor:string,
    srcImage:string
}
