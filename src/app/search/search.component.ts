import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: NgForm): void {
    if(!searchForm.valid) {
      console.log("Please enter something!");
    }else {
      this.moviesService.getMovies(searchForm.value.title);
      searchForm.reset();
    }
  }

}
