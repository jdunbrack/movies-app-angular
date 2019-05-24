import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { NewReviewComponent } from './new-review/new-review.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AllMoviesComponent } from './all-movies/all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMovieComponent,
    ViewMovieComponent,
    NewReviewComponent,
    AllMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
