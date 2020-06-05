import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'GOVIE';
  searchPerformed: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
  }

  onSearch(): void {
    this.searchPerformed = true;
  }

}
