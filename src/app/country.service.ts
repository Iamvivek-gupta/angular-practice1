import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { threadId } from 'node:worker_threads';

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

  deleteEmp(id){
    let url = `http://localhost:9001/api/v1/emp/deleteemp/${id}`;
    console.log(url, "delete url is here");   
    return this.http.delete(`http://localhost:9001/api/v1/emp/deleteemp/${id}`);
  }

  updateEmp(byname){
    console.log(byname);
    let url = `http://localhost:9001/api/v1/emp/updateemp/${byname.Name}`;
    console.log(url, 'updated url here');
    return this.http.patch(url, byname);
  }
}
