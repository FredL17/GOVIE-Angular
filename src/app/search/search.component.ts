import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(searchForm: NgForm): void {
    console.log(searchForm.value);
  }

}
