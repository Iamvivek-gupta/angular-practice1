import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ticket: string = "";
  food : string = ''


  getfood(m){
    //alert(m.value);
    this.food = m.value;
  }
}
