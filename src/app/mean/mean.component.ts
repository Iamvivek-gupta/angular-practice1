import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {

  constructor(private employeeservice: CountryService) { 
    this.getallEmployee()
  }

  ngOnInit(): void {
  }

  employeeDetails : any = [
    {id:"1", name : "supriya", designation:"Ionic developer",department :"CSE"},
    {id:"2", name : "komal", designation:"software developer", department:"IT"},
    {id:"3", name : "vijay", designation:"Sr. software developer",department:"CSE"},
    {id:"4", name : "vivek", designation:"full stackdeveloper",department:"IT"},
    {id:"5", name : "mugdha", designation:"tester",department:"ECE"},
    {id:"6", name : "monika", designation:"designer",department:"CSE"},
  ]

  employeeDetail : any;
  status: any;
  data: any;
  name: String;
  salary: Number;
  department: String;

  getallEmployee(){
    this.employeeservice.getallEmp().subscribe(res => {
      this.data = res.data;
      this.employeeDetail = this.data.emp;
    }, err => {
      console.log(err)
    })
  }


  createEmployee(){
    let employee = {"Name": this.name, "Salary": this.salary, "Department":this.department};
    this.employeeservice.createEmp(employee).subscribe(res => {
      //console.log(res);
      alert(res.status);
      this.getallEmployee();
    }, err => {
      alert(err.message);
    })
  }

}
