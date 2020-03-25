import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../service/data/register.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  loginForm: FormGroup;

  fname = '';
  lname = '';
  email = '';
  subject = '';
  confirmpassword = '';
  validContactUs = false;
  message1 = '';
  message2 = '';

  error_messages = {
    'fname': [
      { type: 'required', message: 'First Name is required.' },
    ],

     'lname': [
       { type: 'required', message: 'Last Name is required.' }
     ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length 6 characters at minimum' },
      { type: 'maxlength', message: 'Email length 30 characters at maximum' },
      { type: 'email', message: 'Email must follow correct pattern' }
    ],

    'subject': [
      { type: 'required', message: 'Subject is required between 1 and 100 characters' }
    ],

  }

  constructor(
    public formBuilder: FormBuilder, private router: Router, private registerService: RegisterService
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),

      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email
      ])),

      subject: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]))
    });
  }

  ngOnInit() {
  }



  public contactUs() {
    this.fname = this.loginForm.value.fname;
    this.lname = this.loginForm.value.lname;
    this.email = this.loginForm.value.email;
    this.subject = this.loginForm.value.subject;
    this.validContactUs = true;
    this.message1 = 'Thank you ' + this.fname + " " + this.lname +  ' for visting our website'
    this.message2= ' We will get back with the answer to your query on  ' + this.email;
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.email);
    console.log(this.subject);
  }

}
