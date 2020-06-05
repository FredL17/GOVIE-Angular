import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hasResults: boolean = false;
  @Output() loading: EventEmitter<boolean> = new EventEmitter();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: NgForm): void {
    if(!searchForm.valid) {
      console.log("Please enter something!");
    }else {
      this.loading.emit(true);
      this.searchService.getMovies(searchForm.value.title);
      searchForm.reset();
    }
  }

}
