import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../service/data/favourite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteBean } from '../model/FavouriteBean';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favourites: Array<any> = [];
  displaySearch: boolean = false;

  startIndex = 0;
  endIndex = 10;

  searchData: string;
  invalidSearch = false;
  errorMessage = '';

  username: string;
  uname: string;
  name: string;
  message: string;
  token: string;

  constructor(private service: FavouriteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.username = sessionStorage.getItem('username');
    this.getAllFavourites();
    this.token = sessionStorage.getItem('token');
  }

  public getAllFavourites() {
    this.favourites = [];
    this.uname = this.username;

    this.service.getAllFavourites(this.uname).subscribe(response => {
      console.log(response);
      this.displaySearch = true;

      for (var i = 0; i < response.length; i++) {
        let favourite = new FavouriteBean(response[i].id, response[i].favourite_items_name, response[i].favourite_items_html_url);
        this.favourites.push(favourite);
      }
    }, error => {
      console.log(error);
    });
  }

  public deleteFavourite(id, name) {
    console.log(`delete todo ${id}`);
    this.service.deleteFavourite(id, name).subscribe(
      response => {
        console.log(response);
        this.message = `Deleted Favourite Repository: ${name} with id: ${id} Successful!`;
        this.getAllFavourites();
      },
      error=>{
        console.log("=========");
        console.log(error);
        console.log("=========");
      }
    );
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

  favourite_items_id: number = 0;

  public addComments(id, favourite_items_name, favourite_items_html_url) {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('favourite_items_name', favourite_items_name);
    sessionStorage.setItem('favourite_items_html_url', favourite_items_html_url);
    let favourite = new FavouriteBean(id, favourite_items_name, favourite_items_html_url);
    this.router.navigate(['comment', id]);
  }

  public getAllCommentsForId(id, favourite_items_name, favourite_items_html_url) {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('favourite_items_name', favourite_items_name);
    sessionStorage.setItem('favourite_items_html_url', favourite_items_html_url);
    let favourite = new FavouriteBean(id, favourite_items_name, favourite_items_html_url);
    this.router.navigate(['comment', id]);
  }

}
