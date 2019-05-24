import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  moviesList;
  thisMovie;
  newMovie;
  showNewMovie = false;

  constructor (private _httpService: HttpService) {  }

  ngOnInit() {
    this.getAllMovies();  
  }

  getAllMovies() {
    this._httpService.getAllMovies().subscribe(data => {
      this.moviesList = data;
      this.moviesList.forEach((movie) => {
        let avg = 0;
        for (let review of movie.reviews) {
          avg += review.score;
        }
        movie['averageRating'] = avg / movie.reviews.length;
      })
    });
  }

  getOneMovie(id) {
    this._httpService.getMovieById(id).subscribe(data => {
      this.thisMovie = data;
    })
  }

  movieData(movie) {
    this.showNewMovie = false;
    this.getAllMovies();
  }

}
