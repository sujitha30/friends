import { Component, OnInit } from '@angular/core';
import{UserService}from'../user.service';
@Component({
  selector: 'app-marks-form',
  templateUrl: './marks-form.component.html',
  styleUrls: ['./marks-form.component.css']
})
export class MarksFormComponent {
  userService: any;
  m1 : number;
  m2 : number;
  m3 : number;
result : number;
newUserName:string;

typesofResult=['poor','average','good','excellent'];
sum()
{
  this.result = (this.m1?this.m1:0)+(this.m2?this.m2:0)+(this.m3?this.m3:0);
  this.userService.changeUserName(this.newUserName);
    }

  
}
