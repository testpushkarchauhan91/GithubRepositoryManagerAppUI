import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('Before: ' + this.isUserLoggedIn());
    if (username === 'pushkar' && password === 'pushkar') {
      // console.log('After: ' + this.isUserLoggedIn());
      sessionStorage.setItem('token', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('token');
  }
}
