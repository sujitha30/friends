import { Component } from '@angular/core';
import{UserService}from'./user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

currentDate=new Date();
constructor(public userService : UserService){

}

 
}