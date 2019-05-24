import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMovieComponent } from './new-movie/new-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

const routes: Routes = [
  { path: "movies/new", component: NewMovieComponent },
  { path: "movies/:id", component: ViewMovieComponent },
  { path: "review/:id", component: NewReviewComponent },
  { path: "movies", component: AllMoviesComponent },
  { path: "", pathMatch: 'full', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
