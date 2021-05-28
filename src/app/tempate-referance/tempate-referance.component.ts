import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate-referance',
  templateUrl: './tempate-referance.component.html',
  styleUrls: ['./tempate-referance.component.css']
})
export class TempateReferanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getPhone(p){
    alert(p.value);
  }
}
