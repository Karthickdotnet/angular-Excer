import { Component, OnInit } from '@angular/core';

import { MyserviceService } from '../services/myservice.service';
@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
  action: boolean = false;
  buttonName:any = 'Show';
  names: string[];
  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.names = this.myService.getNames();
  }


  toggle() {
    this.action = !this.action;

if(this.action)  
  this.buttonName = "Hide";
else
  this.buttonName = "Show";
}

  showday: string;
  getday<T>(day: T): string {
    let day_ = Number(day);
    if (day_ > 7 || day_ <= 0) {
      alert("1 to 7");
    }
    return this.showday = weekday[day_];
 
  }
}
enum weekday {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturaday,
  Sunday
}