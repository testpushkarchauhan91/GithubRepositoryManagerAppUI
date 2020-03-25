import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 // isUserLoggedIn: Boolean = false;
  constructor(private service: HardcodedAuthenticationService,private route: ActivatedRoute) { }

  username:string;
  favouriteUrl:string;
  ngOnInit() {
  //  this.isUserLoggedIn = this.service.isUserLoggedIn();
  }

}
