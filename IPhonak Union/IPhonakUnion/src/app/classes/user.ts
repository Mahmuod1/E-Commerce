export class User {
    constructor(
        public firstName:any,
        public lastName:any,
        public email:any,
        public password:any,
    ){}
}

export interface ILogin{
    loginEmail:string,
    loginPassword:string
}
