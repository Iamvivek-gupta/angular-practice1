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
    return this.http.get('http://localhost:9001/api/v1/emp/getallEmp');
  }

  createEmp(empyoleeData){
    console.log(empyoleeData)
    return this.http.post('http://localhost:9001/api/v1/emp/createnewEmp', empyoleeData)
  }
}
