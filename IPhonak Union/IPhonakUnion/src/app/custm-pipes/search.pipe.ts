import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../shared/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: IProduct[], SearchValue: string): IProduct[] {
    if (!products) {
      return [];
    }
    if (!SearchValue) {
      return products;
    }
    SearchValue = SearchValue.toUpperCase()
    return products.filter(product=>{
      product.productName.includes(SearchValue)
    })
  }

}
