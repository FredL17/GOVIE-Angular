import { Component, OnInit, OnDestroy } from '@angular/core';
import { result } from '../models/result.model';
import { Subscription } from 'rxjs';
import { SearchService } from '../services/search.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  // data obtained from OMDb API
  totalResults: number = 0;
  searchResults: result[] = [];
  searchResultsSub: Subscription;
  
  // results to show on the page
  resultsToDisplay: result[] =[];
  
  // paginator properties
  pageSizeOptions: number[] = [3, 6, 9];
  pageSize: number = 6;
  itemStartIndex: number = 0;
  itemEndIndex: number = 6;

  // others
  isLoading: boolean = true;
  defaultImageURL: string = 'assets/images/default-img.jpg';
  

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResultsSub = this.searchService.getSearchResultObs().subscribe(res => {
      // check if a response is available
      if(res != null) {
        this.searchResults = res.searchResults;
        this.totalResults = res.totalResults;
        if(this.searchResults.length < this.pageSize) {
          this.resultsToDisplay = this.searchResults.slice(this.itemStartIndex, this.searchResults.length);
        }else {
          this.resultsToDisplay = this.searchResults.slice(this.itemStartIndex, this.pageSize);
        }
        this.isLoading = false;
      }else {
        console.log("no data to display yet.");
      }
    });
  }

  onChangePage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.itemStartIndex = event.pageIndex * event.pageSize;
    // ensure the index is in boundary
    if((event.pageIndex + 1) * event.pageSize <= this.searchResults.length) {
      this.itemEndIndex = (event.pageIndex + 1) * event.pageSize;
    }
    else {
      this.itemEndIndex = this.searchResults.length;
    }
    // reset the results to be displayed
    this.resultsToDisplay = this.searchResults.slice(this.itemStartIndex, this.itemEndIndex);
  }

  ngOnDestroy(): void {
    this.searchResultsSub.unsubscribe();
  }

}
