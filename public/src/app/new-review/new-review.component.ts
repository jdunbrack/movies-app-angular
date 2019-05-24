import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Review } from "./../review";

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  movieId;
  thisMovie;
  newReview: Review = new Review();

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

  onSubmit() {
    this._httpService.addReview(this.movieId, this.newReview).subscribe(data => {
      this._router.navigate(['/']);
    })
  }  
}
