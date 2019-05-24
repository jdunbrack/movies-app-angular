import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Movie } from './../movie';
import { Review } from './../review';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  @Output() newMovieData = new EventEmitter();

  movieId;
  thisMovie: Movie = new Movie();
  thisReview: Review = new Review();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.thisMovie.reviews[0] = (this.thisReview);
    this._httpService.addMovie(this.thisMovie).subscribe(data => {
      console.log(data);
    })    
    this.newMovieData.emit(this.thisMovie);
    this.thisMovie = new Movie();
    this.thisReview = new Review();
  }

}
