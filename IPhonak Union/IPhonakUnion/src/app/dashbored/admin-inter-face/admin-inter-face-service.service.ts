import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/product';

@Injectable({
  providedIn: 'root'
})
export class AdminInterFaceServiceService {

  _urlAdd="http://localhost:4750/collection/products/create"

  _urlDelete='http://localhost:4750/collection/products/delete'

  _urlUpdate='http://localhost:4750/collection/products/update'

  constructor(private _http:HttpClient ) { }

  deleteProductFromDatabase(productId:string){
    return this._http.delete<void>(`${this._urlDelete}/${productId}`).pipe(
      catchError(error=>{
        return throwError(error.message)
      })
    )
  }

  AddProductToDatabase(product:IProduct){
    return this._http.post<IProduct>(this._urlAdd,product)
  }
}
