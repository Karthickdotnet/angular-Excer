import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
export interface State {
  value: string;
  viewValue: string;
}
export interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})


export class Ex7Component implements OnInit {
  selectedValue: string;
  
  public flagForm: FormGroup;
  states: State[] = [
    { value: 'TamilNadu', viewValue: 'தமிழ்நாடு' },
    { value: 'Andhra', viewValue: 'ఆంధ్ర' },
    { value: 'Kerala', viewValue: 'കേരളം' }
  ];

  countries: Country[] = [
    { value: 'India', viewValue: 'India' },
    { value: 'US', viewValue: 'US' },
    { value: 'UK', viewValue: 'UK' }
  ];
  constructor(private fb: FormBuilder) {


    // To initialize FormGroup
    this.regiForm = fb.group({
      'FirstName': [null, Validators.required],
      'LastName': [null, Validators.required],
      'IsAccepted': [null]
    });
    
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  fName = new FormControl('', [Validators.required]);
  lName = new FormControl('', [Validators.required]);



  regiForm: FormGroup;
  FirstName: string = '';
  LastName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Blog: string = '';
  Email2: string = '';
  IsAccepted: number = 0;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getfNameErrorMessage() {
    return this.fName.hasError('required') ? 'You must enter a value' :
      this.fName.hasError('first Name') ? 'Not a valid First Name ' :
        '';
  }
  getlNameErrorMessage() {
  
    return this.lName.hasError('required') ? 'You must enter a value' :
      this.lName.hasError('Last Name') ? 'Not a valid Last Name' :
        '';
  }
  // On Change event of Toggle Button
  onChange(event: any) {
    
    if (event.checked == true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
    console.log(this.IsAccepted);
  }

  // Executed When Form Is Submitted
  onFormSubmit(form: NgForm) {
    console.log(form);
  }
}
