import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  name:string;
  constructor(private http: HttpClient) { 
    this.name = sessionStorage.getItem('name');
  }

  getAllFavourites(username): Observable<any> {
    return this.http.get("http://localhost:8082/favourite/");
  }

  deleteFavourite(id,username){
      return this.http.delete("http://localhost:8082/favourite/" + id + "/");
  }

  getAFavourite(id):Observable<any> {
    return this.http.get("http://localhost:8082/favourite/"+ id + "/");
  }

  postFavourite(favourite){
    console.log("service called......")
    return this.http.post("http://localhost:8082/favourite/",favourite);
  }
}
