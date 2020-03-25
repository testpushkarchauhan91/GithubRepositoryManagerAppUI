import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardDataService } from '../service/data/dashboard-data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  message = 'Some Dashboard Message';
  name = '';
  welcomeMessageFromWelcomeComponent: string;
  token:string;

  constructor(private route: ActivatedRoute, private service: DashboardDataService) { }

  ngOnInit() {
    console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
    this.token = sessionStorage.getItem("token");
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      //    response => console.log(response)
    );
    //  console.log('last line of getWelcomeMessage');
    // console.log('Get Welcome Message');
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      //    response => console.log(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromWelcomeComponent = response.message;
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error) {
    //    console.log(error);
    //    console.log(error.error);
    //    console.log(error.error.message);
    this.welcomeMessageFromWelcomeComponent = error.error.message;
  }

}
