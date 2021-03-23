import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProductSearch } from 'src/app/shared/product';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit,OnChanges {

  searchResult:IProductSearch[]=[];
  searchKey:any = '';

  constructor(private activetedKey: ActivatedRoute) {
    this.activetedKey.paramMap.subscribe((params:ParamMap)=>{
      this.searchKey = params.get('q')
    })

  }

  ngOnInit(): void {
    let searchData = localStorage.getItem('searchList');
    let searchPars = JSON.parse(searchData?searchData:'')
    this.searchResult = searchPars;
    let searchKey = localStorage.getItem('searchKey');
    let searchKeyPars = JSON.parse(searchKey?searchKey:'')
    this.searchKey = searchKeyPars
    console.log('init')
    console.log(location.hash)

    // location.reload();
  }
  ngOnChanges(){

  }

}
