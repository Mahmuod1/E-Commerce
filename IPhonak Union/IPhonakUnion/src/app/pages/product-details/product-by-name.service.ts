import { IProduct } from './../../shared/product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductByNameService {

  constructor(private _http:HttpClient) { }

  getProductByName(productName:string|null):Observable<IProduct[]>{

    return this._http.get<IProduct[]>(`http://localhost:4750/collection/products/find/${productName}`).pipe(
      catchError((error)=>{
        return throwError (error.message)
      })

    )

  }
getNewReleasesProducts():Observable<IProduct>{
  return this._http.get<IProduct>(`http://localhost:4750/collection/products/new-releases`).pipe(
    catchError((error)=>{
      return throwError (error.message)
    })

  )
}
getBestSellersProduct():Observable<IProduct>{
  return this._http.get<IProduct>(`http://localhost:4750/collection/products/best-sellers`).pipe(
    catchError((error)=>{
      return throwError (error.message)
    })

  )
}
getNewReleasesProduct():Observable<IProduct>{
  return this._http.get<IProduct>(`http://localhost:4750/collection/products/new-releases`).pipe(
    catchError((error)=>{
      return throwError (error.message)
    })

  )
}



}
