import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {
  @Output() returnData = new EventEmitter();

  movieId;
  thisMovie;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.movieId = params['id'];
    })
    this._httpService.getMovieById(this.movieId).subscribe(data => {
      this.thisMovie = data;
    })
  }

  deleteMovie() {
    this._httpService.removeMovie(this.movieId).subscribe(data => {
      this._router.navigate(['/']);
    })
    this.returnData.emit(this.thisMovie);
  }

  deleteReview(e) {
    let reviewId = e.target.getAttribute('id');
    for (let i = 0; i < this.thisMovie.reviews.length; i++) {
      if (this.thisMovie.reviews[i]['_id'] == reviewId) {
        this.thisMovie.reviews.splice(i,1);
      }
    }
    this._httpService.removeReview(this.movieId, reviewId).subscribe(data => {
    })
  }

  goHome() {
    this._router.navigate(['/']);
  }

}
