import { Component, OnInit } from '@angular/core';
import { IInterfaceEx } from './IDate';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,IInterfaceEx {
  myLocalDate = new Date();
  constructor() { }

  ngOnInit() {
  }
  myDate=this.myLocalDate;
  getDate()
  {
    console.log("");
  }
}
