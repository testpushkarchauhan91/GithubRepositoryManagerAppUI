import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegisterBean } from '../model/RegisterBean';
import { Router } from '@angular/router';
import { RegisterService } from '../service/data/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;


  error_messages = {
    'fname': [
      { type: 'required', message: 'First Name is required.' },
    ],

    // 'lname': [
    //   { type: 'required', message: 'Last Name is required.' }
    // ],

    // 'email': [
    //   { type: 'required', message: 'Email is required.' },
    //   { type: 'minlength', message: 'Email length.' },
    //   { type: 'maxlength', message: 'Email length.' },
    //   { type: 'required', message: 'please enter a valid email address.' }
    // ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'Password length 6 characters at minimum' },
      { type: 'maxlength', message: 'Password length 30 characters at maximum' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'Password length 6 characters at minimum' },
      { type: 'maxlength', message: 'Password length 30 characters at maximum' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder, private router: Router, private registerService:RegisterService
  ) {
    this.loginForm = this.formBuilder.group({
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),

      // lname: new FormControl('', Validators.compose([
      //   Validators.required
      // ])),
      // email: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(30)
      // ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, { 
      validators: this.password.bind(this)
    });
  }

  ngOnInit() {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  username = '';
  pass = '';
  confirmpassword = '';
  validRegistration:boolean = false;
  message = 'Successful Registration for : ';
  redirectmessage=' Please try to Login now by clicking Login link in top right hand side!!';

  public registerUser() {
    this.username = this.loginForm.value.fname;
    this.pass = this.loginForm.value.password;
    this.confirmpassword = this.loginForm.value.confirmpassword;
    let user = new RegisterBean(Math.floor((Math.random() * 10000) + 1), this.username, this.pass, this.confirmpassword);
    return this.registerService.registerUser(user).subscribe(response => {
      console.log("User Registered Successfully");
      this.validRegistration=true;
    },
      error => {
        console.log("Error while registration");
        this.validRegistration=false;
      });
  }

}
