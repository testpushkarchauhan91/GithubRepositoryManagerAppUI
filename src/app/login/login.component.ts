import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication-service.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Dependency Injection
  constructor(private router: Router, private service: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService,
    private jwtAuthService: JwtAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    /*Way 1: Using Service Class HardCoded Way */
    if (this.service.authenticate(this.username, this.password)) {
      sessionStorage.setItem('username', this.username);
    //this.router.navigate(['welcome', this.username]);
      this.router.navigate(['dashboard', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

    /*Way 2:  Old way without service hardcoded*/
    /*
    if (this.username === 'pushkar' && this.password === 'pushkar') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
    */
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        sessionStorage.setItem('username', this.username);
      //this.router.navigate(['welcome', this.username]);
        this.router.navigate(['dashboard', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

  handleJWTAuthenticationLogin(){
    this.jwtAuthService.authenticateJWT(this.username, this.password).subscribe(
      data => {
        sessionStorage.setItem('username', this.username);
        console.log("Login comment start.............");
        console.log(data.token);
        console.log("Login comment end.............");
        sessionStorage.setItem('token',data.token);
        this.router.navigate(['dashboard', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
