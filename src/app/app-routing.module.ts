import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

// sets up routes constant
const routes: Routes = [
    { path: 'results', component: ResultsComponent },
    { path: '', component: SearchComponent }
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }