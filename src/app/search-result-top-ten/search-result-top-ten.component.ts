import { Component, OnInit } from '@angular/core';
import { RepositoryConfig } from '../model/RepositoryConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../service/data/search.service';
import { FavouriteBean } from '../model/FavouriteBean';
import { FavouriteService } from '../service/data/favourite.service';

@Component({
  selector: 'app-search-result-top-ten',
  templateUrl: './search-result-top-ten.component.html',
  styleUrls: ['./search-result-top-ten.component.css']
})
export class SearchResultTopTenComponent implements OnInit {
  total_count: number;
  incomplete_results: boolean;
  items;
  owner;

  startIndex = 0;
  endIndex = 10;

  configurations: Array<any> = [];

  message: string;

  constructor(private service: SearchService, private favouriteService: FavouriteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.refreshRepos();
  }

  public refreshRepos() {
    configurations: [];

    this.service.retrieveRepos().subscribe(data => {
      console.log(data);
      this.configurations = [];

      for (var i = 0; i < data.items.length; i++) {
        let config = new RepositoryConfig();
        config.total_count = data.total_count;
        config.incomplete_results = data.incomplete_results;
        config.items_id = data.items[i].id;
        config.items_name = data.items[i].name;
        config.items_html_url = data.items[i].html_url;
        this.configurations.push(config);
      }


    }, error => {
      console.log(error);
    });
  }

  getArrayFromNumber(length) {
    return new Array(length).map((a, i) => {
      return i;
    });
  }

  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;
  }

  public postFavourite(favourite_items_id, favourite_items_name, favourite_items_html_url) {
    let favourite = new FavouriteBean(favourite_items_id,favourite_items_name,favourite_items_html_url);
    this.favouriteService.postFavourite(favourite).subscribe(response => {
      this.message = "Added Repository with ID: " + favourite_items_id + " and Name: " + favourite_items_name + " Successful!" + " You will be automatically redirected to Login page in 30 seconds !!!";
      console.log(response);
      setTimeout(()=>{  this.router.navigate(['login']); }, 30000)
     // this.router.navigate(['login']);
    }, error => {
      console.log(error);
    });
  }

  // public goToLogin(){
  //   this.router.navigate(['login']);
  // }
}
