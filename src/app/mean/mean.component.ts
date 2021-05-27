import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {

  constructor() { }

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

}
