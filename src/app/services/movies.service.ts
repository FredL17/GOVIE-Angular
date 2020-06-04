import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: String = "b9bb3cc2";
  url: String = "http://www.omdbapi.com/?";

  constructor(private http: HttpClient) { }


  getMovies(title: String): void {
    this.http.get(this.url + `apiKey=${this.apiKey}` + `&s=${title}`).subscribe(res => {
      console.log(res);
    });
  }

}
