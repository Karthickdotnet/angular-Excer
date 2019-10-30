import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  getNames():string[]{
    return ["Karthick","Laxman","Angular","Virtusa"]
  }

  getAccountNos():number[]{
    return [1,2,3,4]
  }
}
