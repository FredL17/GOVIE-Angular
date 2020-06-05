import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { result } from '../models/result.model';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  totalResults: number = 0;
  searchResults: result[] = [];
  searchResultsSub: Subscription;
  isLoading: boolean = true;
  defaultImageURL: string = 'assets/images/default-img.jpg';


  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResultsSub = this.searchService.getSearchResultObs().subscribe(res => {
      if(res != null) {
        this.searchResults = res.searchResults.map((result: any) => {
          return {
            title: result.Title,
            year: result.Year,
            type: result.Type,
            posterURL: result.Poster,
            imdbId: result.imdbID
          };
        });
        this.totalResults = res.totalResults;
        this.isLoading = false;
        console.log("subscribed");
      }else {
        console.log("no data to display yet.");
      }
    });
  }

  ngOnDestroy(): void {
    this.searchResultsSub.unsubscribe();
  }

}
