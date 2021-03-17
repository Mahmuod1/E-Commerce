import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  screenMdActive = false;
  plusOrMins = false;
  constructor() { }

  ngOnInit(): void {
  }
  openSearchBox(seachBox:any){
    seachBox.style.display = "block";
    document.body.style.overflow = "hidden"
  }
  openMenu(){
    this.screenMdActive= !this.screenMdActive;
    if (this.screenMdActive == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  togglePLus(){
    this.plusOrMins = !this.plusOrMins
  }
}
