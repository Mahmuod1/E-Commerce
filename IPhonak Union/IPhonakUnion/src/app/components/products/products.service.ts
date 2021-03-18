import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _url:string = "http://localhost:4750/collection/products/getAll";
  constructor(private _http:HttpClient) { }

  fetchProds():Observable<IProduct>{
    return this._http.get<IProduct>(this._url,{headers:{}}).pipe(
      catchError(
        (err)=>{
          return throwError(err.message);
        }
      )
    )
  }

}

