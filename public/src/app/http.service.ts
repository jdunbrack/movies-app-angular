import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllMovies() {
    return this._http.get('/api/movies')
  }

  getMovieById(id) {
    return this._http.get(`/api/movies/${id}`);
  }

  addMovie(movie) {
    return this._http.post('/api/movies', movie);
  }

  addReview(movieId, reviewData) {
    return this._http.put(`/api/movies/${movieId}`, reviewData);
  }

  removeReview(movie_id, review_id) {
    return this._http.delete(`/api/movies/${movie_id}/reviews/${review_id}`);
  }

  removeMovie(id) {
    return this._http.delete(`/api/movies/${id}`);
  }
}
