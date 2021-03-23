import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input('buttonName') button:any;
  constructor() { }

  ngOnInit(): void {

  }
buttonContent='';

}
