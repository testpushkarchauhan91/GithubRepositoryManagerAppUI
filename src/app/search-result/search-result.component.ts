import { Component, OnInit } from '@angular/core';
import { RepositoryConfig } from '../model/RepositoryConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../service/data/search.service';
import { FavouriteBean } from '../model/FavouriteBean';
import { FavouriteService } from '../service/data/favourite.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  total_count: number;
  incomplete_results: boolean;
  items;
  owner;

  startIndex = 0;
  endIndex = 10;

  configurations: Array<any> = [];
  configurations2: Array<any> = [];

  message:string;

  constructor(private service: SearchService, private favouriteService : FavouriteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //  this.refreshRepos();
  }

  refreshRepos() {
    this.service.retrieveRepos().subscribe(data => {
      console.log(data);

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

  searchData: string;
  displaySearch: boolean = false;
  invalidSearch = false;
  errorMessage = '';

  public onSubmit(data) {
    configurations2: Array;
    /*
    if(data.searchData===''){
      this.invalidSearch = true;
      this.errorMessage = "Please enter some value in search box.";
    }
    else if(data.searchData.length<3){
      this.invalidSearch = true;
      this.errorMessage = "Search Data should be ateast 3 characters";
    }
    */
    if (data.searchData.length > 20) {
      this.invalidSearch = true;
      this.errorMessage = "Search Data should be atmost 20 characters";
    }
    this.searchData = data.searchData;
    console.log("Component Called:  " + data.searchData);

    this.service.getData(this.searchData).subscribe(
      data => {
        this.displaySearch = true;
        console.log(this.searchData);

        for (var i = 0; i < data.items.length; i++) {
          let config2 = new RepositoryConfig();
          config2.total_count = data.total_count;
          config2.incomplete_results = data.incomplete_results;
          config2.items_id = data.items[i].id;
          config2.items_name = data.items[i].login;
          config2.items_html_url = data.items[i].html_url;
          this.configurations2.push(config2);
        }
      },
      error => {
        console.log(error)
      });

      this.displaySearch=false;
      this.configurations2 = [];
  }

  /*
  public refreshData(){
    this.displaySearch=false;
    this.configurations2 = [];
  }
  */

 showMessage:boolean;

 public postFavourite(favourite_items_id, favourite_items_name, favourite_items_html_url) {
  let favourite = new FavouriteBean(favourite_items_id,favourite_items_name,favourite_items_html_url);
  this.favouriteService.postFavourite(favourite).subscribe(response => {
   this.showMessage = true;
   this.message = "Added Repository with ID: " + favourite_items_id + " and Name: " + favourite_items_name + " Successful!" + " You will be automatically redirected to Login page in 30 seconds !!!";
    console.log(response);
    setTimeout(()=>{  this.router.navigate(['login']); }, 30000)
   // this.router.navigate(['login']);
  }, error => {
    console.log(error);
  });
}

}