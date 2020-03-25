import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../service/data/favourite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteBean } from '../model/FavouriteBean';
import { CommentService } from '../service/data/comment.service';
import { CommentBean } from '../model/CommentBean';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  favourite_items_id: any;
  favourite_items_name: any;
  favourite_items_html_url: any;
  comment_value: string;

  favourites: Array<any> = [];
  comments: Array<any> = [];
  username: string;
  uname: string;

  displayComments = false;
  id: number;
  message: string;

  startIndex = 0;
  endIndex = 10;

  searchData: string;
  invalidSearch = false;
  errorMessage = '';
  name: string;

  showUpdateCommentTable = false;
  showAddCommentTable = false;
  comment_id: number;

  constructor(private service: FavouriteService, private commentService: CommentService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.favourite_items_id = parseInt(sessionStorage.getItem('id'));
    this.favourite_items_name = sessionStorage.getItem('favourite_items_name');
    this.favourite_items_html_url = sessionStorage.getItem('favourite_items_html_url');
    console.log(this.favourite_items_id);
    console.log(this.favourite_items_name);
    console.log(this.favourite_items_html_url);
    this.username = sessionStorage.getItem('username');
    this.getAllCommentsForId();
  }

  public getAFavourite() {
    this.uname = this.username;

    this.service.getAFavourite(this.favourite_items_id).subscribe(response => {
      console.log(response);

      for (var i = 0; i < response.length; i++) {
        const favourite = new FavouriteBean(response[i].favourite_items_id,
          response[i].favourite_items_name,
          response[i].favourite_items_html_url);
        this.favourites.push(favourite);
      }
    }, error => {
      console.log(error);
    });
  }

  postComment(data) {
    this.comment_value = data.comment_value;
    let comment = new CommentBean(Math.floor((Math.random() * 10000) + 1),
      this.favourite_items_id,
      this.favourite_items_name,
      this.favourite_items_html_url,
      this.comment_value);
    console.log("Comment Value : " + this.comment_value);
    this.commentService.postComment(comment).subscribe((response) => {
      this.message = "Added Comments for Repository with ID: " + this.favourite_items_id + 
      " and Name: " + this.favourite_items_name + " Successful!";
      this.getAllCommentsForId();
    });
  }

  public getAllCommentsForId() {
    this.commentService.getAllComments(this.username).subscribe(response => {
      console.log("Res: " + response);
      this.displayComments = true;
      this.comments = response.filter(element => {
        return element.favourite_items_name === this.favourite_items_name;
      });
      //  this.comments = response;
    });
  }

  public deleteComment(id) {
    this.commentService.deleteComment(id).subscribe(
      response => {
        this.message = `Deleted Comment with id: ${id} and name ${this.favourite_items_name} Successful!`;
        this.getAllCommentsForId();
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

  public updateComment1(id, comment_value) {
    this.showUpdateCommentTable = true;
    this.id = id;
    this.comment_value = comment_value;
  }

  public updateComment2(data) {
    this.showUpdateCommentTable = true;
    this.comment_value = data.comment_value;
    // console.log(this.favourite_items_id);
    // console.log(this.favourite_items_name);
    // console.log(this.favourite_items_html_url);
    // console.log(this.comment_id);

    let comment = new CommentBean(Math.floor((Math.random() * 10000) + 1),
      this.favourite_items_id,
      this.favourite_items_name,
      this.favourite_items_html_url,
      this.comment_value);
    this.commentService.updateComment('pushkar', this.id, comment).subscribe(response => {
      console.log(response);
      this.message = `Updated Comments for Repository with ID: ${this.favourite_items_id} and Name: ${this.favourite_items_name} with Comment ID : ${this.comment_id} Successful!`;
      this.getAllCommentsForId();
    },
      (error) => {
        console.log(error);
      });
  }

}
