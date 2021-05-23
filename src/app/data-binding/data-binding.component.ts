import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor(private service:CountryService) {
    this.getCountry()
   }

  name: string;
  text: string;


  CountryDetails: any;
  getCountry(){
    this.service.getCountryDetails().subscribe( (data) => {
      this.CountryDetails = data;
    })
  }

  getName(){
    return "Komal";
  }
  status: boolean = false;
  status1: string = "online";
  status2: string = "offline";
  komal: string = "komal is a student"
  ngOnInit(): void {
  }

  message: string;

  ProductDetails:any = [
    {id: 1, name: "nokia", price: 1200, brand: "XC"},
    {id: 2, name: "nokia", price: 1300, brand: "XC"},
    {id: 3, name: "nokia", price: 1400, brand: "XC"},
    {id: 4, name: "nokia", price: 1500, brand: "XC"},
    {id: 5, name: "nokia", price: 1600, brand: "XC"}
  ]
  getValue(e){

    this.message = "Welcome to codex family " + e.target.value;
    
  }
  condition: boolean = false;
  product: string;
  getProduct(event){
    this.product = event.target.value;
    this.condition = true;
  }
}
