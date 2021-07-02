import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }
  getCountryDetails(){
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }


  getallEmp(){
    return this.http.get('http://localhost:5001/api/v1/emp/getallEmp');
  }
}
