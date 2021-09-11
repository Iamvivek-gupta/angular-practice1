import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor() { }
  genders = [
    {"id": 1, "value": "male"},
    {"id": 2, "value": "female"}
  ]

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('Komal'),
      'email': new FormControl(null),
      'course': new FormControl('HTML5'),
      'gender': new FormControl('male'),
    });
  }


  onSubmit(){
    console.log(this.myReactiveForm.value)
  }

}
