import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'vijay';
  defaultCourse: String = 'Angular';
  account: String = '';
  



  onSubmit(form:NgForm){
    alert('hallo')
    console.log(form.value);
  }
}
