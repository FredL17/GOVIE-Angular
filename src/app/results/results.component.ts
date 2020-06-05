import { Component, OnInit, Input } from '@angular/core';
import { result } from '../models/result.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() totalResults: number = 0;
  @Input() searchResults: result[] = [];


  constructor() { }

  ngOnInit(): void {
  }



}
