import { Component, OnInit } from '@angular/core';
import {UserService} from'../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

  constructor(public UserService:UserService ) { }
}
