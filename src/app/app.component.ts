import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from './services/search.service';
import { result } from './models/result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GOVIE';
  hasResults: boolean = false;
  searchResultsSub: Subscription;
  searchResults: result[];
  totalResults: number = 0;
  isLoading: boolean = false;


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResultsSub = this.searchService.getSearchResultObs().subscribe(res => {
      console.log(res);
      this.hasResults = res.hasResults;
      this.searchResults = res.searchResults.map(result => {
        return {
          title: result.Title,
          year: result.Year,
          type: result.Type,
          posterURL: result.Poster,
          imdbId: result.imdbID
        }
      });
      this.totalResults = res.totalResults;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.searchResultsSub.unsubscribe();
  }

  onLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  
  
}
