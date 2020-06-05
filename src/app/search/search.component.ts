import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchPerformed = new EventEmitter<void>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: NgForm): void {
    if(!searchForm.valid) {
      console.log("Please enter something!");
    }else {
      this.searchService.getMovies(searchForm.value.title);
      this.searchPerformed.emit();
      searchForm.reset();
    }
  }

}
