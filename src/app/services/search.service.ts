import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { result } from '../models/result.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiKey: string = "b9bb3cc2";
  private url: string = "http://www.omdbapi.com/?";
  private searchResults: result[] = [];
  private totalResults: number = 0;
  private searchResultsSubject = new BehaviorSubject<any>(null); 

  constructor(private http: HttpClient, private router: Router) { }

  getMovies(title: string): void {
    this.http.get<any>(this.url + `apiKey=${this.apiKey}` + `&s=${title}`).subscribe(res => {
      if(res.Response === "False") {
        console.log(res.Error);
      }
      else {
        this.searchResults = res.Search.map((result: any) => {
          return {
            title: result.Title,
            year: result.Year,
            type: result.Type,
            posterURL: result.Poster,
            imdbId: result.imdbID
          };
        });
        this.totalResults = res.totalResults;
        this.searchResultsSubject.next({
          searchResults: this.searchResults, 
          totalResults: this.totalResults
        });
        this.router.navigate(['/','results']);
      } 
    });
  }

  getSearchResultObs(): Observable<any> {
    return this.searchResultsSubject.asObservable();
  }

}
