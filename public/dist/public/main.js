(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.css":
/*!*****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1tb3ZpZXMvYWxsLW1vdmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.html":
/*!******************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-dark\">\n  <h3 class=\"d-inline-block\">Movies</h3>\n  <a id=\"new-movie\" (click)=\"showNewMovie = true\" class=\"btn btn-secondary btn-sm ml-5\">Add Movie</a> <br/>\n  <table class=\"table table-striped mx-auto col-10\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Title</th>\n        <th>Average Rating</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let movie of moviesList\">\n        <td>{{movie.title}}</td>\n        <td>{{movie.averageRating}}</td>\n        <td>\n          <a [routerLink]=\"['/movies/', movie['_id']]\" id=\"view-movie\" class=\"btn btn-primary mx-2\">Read Reviews</a>\n          <a [routerLink]=\"['/review/', movie['_id']]\" id=\"new-review\" class=\"routing btn btn-success mx-2\">Write Review</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<app-new-movie *ngIf=\"showNewMovie\" (newMovieData)=\"movieData($event)\"></app-new-movie>"

/***/ }),

/***/ "./src/app/all-movies/all-movies.component.ts":
/*!****************************************************!*\
  !*** ./src/app/all-movies/all-movies.component.ts ***!
  \****************************************************/
/*! exports provided: AllMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesComponent", function() { return AllMoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");



var AllMoviesComponent = /** @class */ (function () {
    function AllMoviesComponent(_httpService) {
        this._httpService = _httpService;
        this.showNewMovie = false;
    }
    AllMoviesComponent.prototype.ngOnInit = function () {
        this.getAllMovies();
    };
    AllMoviesComponent.prototype.getAllMovies = function () {
        var _this = this;
        this._httpService.getAllMovies().subscribe(function (data) {
            _this.moviesList = data;
            _this.moviesList.forEach(function (movie) {
                var avg = 0;
                for (var _i = 0, _a = movie.reviews; _i < _a.length; _i++) {
                    var review = _a[_i];
                    avg += review.score;
                }
                movie['averageRating'] = avg / movie.reviews.length;
            });
        });
    };
    AllMoviesComponent.prototype.getOneMovie = function (id) {
        var _this = this;
        this._httpService.getMovieById(id).subscribe(function (data) {
            _this.thisMovie = data;
        });
    };
    AllMoviesComponent.prototype.movieData = function (movie) {
        this.showNewMovie = false;
        this.getAllMovies();
    };
    AllMoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-movies',
            template: __webpack_require__(/*! ./all-movies.component.html */ "./src/app/all-movies/all-movies.component.html"),
            styles: [__webpack_require__(/*! ./all-movies.component.css */ "./src/app/all-movies/all-movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AllMoviesComponent);
    return AllMoviesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _view_movie_view_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-movie/view-movie.component */ "./src/app/view-movie/view-movie.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");







var routes = [
    { path: "movies/new", component: _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_3__["NewMovieComponent"] },
    { path: "movies/:id", component: _view_movie_view_movie_component__WEBPACK_IMPORTED_MODULE_4__["ViewMovieComponent"] },
    { path: "review/:id", component: _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__["NewReviewComponent"] },
    { path: "movies", component: _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_6__["AllMoviesComponent"] },
    { path: "", pathMatch: 'full', redirectTo: '/movies' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Squishy Tomatoes</h1>\n\n<router-outlet></router-outlet>\n\n\n<!-- <app-view-movie *ngIf=\"thisMovie\" [thisMovie]=\"thisMovie\"></app-view-movie>\n<app-new-review *ngIf=\"thisMovie\" [thisMovie]=\"thisMovie\"></app-new-review> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/new-movie/new-movie.component.ts");
/* harmony import */ var _view_movie_view_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-movie/view-movie.component */ "./src/app/view-movie/view-movie.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./all-movies/all-movies.component */ "./src/app/all-movies/all-movies.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_6__["NewMovieComponent"],
                _view_movie_view_movie_component__WEBPACK_IMPORTED_MODULE_7__["ViewMovieComponent"],
                _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_8__["NewReviewComponent"],
                _all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_11__["AllMoviesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllMovies = function () {
        return this._http.get('/api/movies');
    };
    HttpService.prototype.getMovieById = function (id) {
        return this._http.get("/api/movies/" + id);
    };
    HttpService.prototype.addMovie = function (movie) {
        return this._http.post('/api/movies', movie);
    };
    HttpService.prototype.addReview = function (movieId, reviewData) {
        return this._http.put("/api/movies/" + movieId, reviewData);
    };
    HttpService.prototype.removeReview = function (movie_id, review_id) {
        return this._http.delete("/api/movies/" + movie_id + "/reviews/" + review_id);
    };
    HttpService.prototype.removeMovie = function (id) {
        return this._http.delete("/api/movies/" + id);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./review */ "./src/app/review.ts");

var Movie = /** @class */ (function () {
    function Movie(id, title, reviews, created_at, updated_at) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = ""; }
        if (reviews === void 0) { reviews = [new _review__WEBPACK_IMPORTED_MODULE_0__["Review"]()]; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.id = id;
        this.title = title;
        this.reviews = reviews;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/new-movie/new-movie.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form .ng-dirty.ng-invalid {\n    border-left: 5px solid red;\n}\nform .ng-dirty.ng-valid {\n    border-left: 5px solid green;\n}\nform .ng-dirty {\n    border-left: 5px solid gray;\n}\nform.ng-dirty {\n    border-left: 5px solid gray;\n}\nform.ng-valid {\n    border-left: 5px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LW1vdmllL25ldy1tb3ZpZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9uZXctbW92aWUvbmV3LW1vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcbn1cbmZvcm0gLm5nLWRpcnR5Lm5nLXZhbGlkIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xufVxuZm9ybSAubmctZGlydHkge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcbn1cblxuZm9ybS5uZy1kaXJ0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmF5O1xufVxuXG5mb3JtLm5nLXZhbGlkIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-dark my-5\">\n  <h3>Add and Review a Movie</h3>\n  <form class=\"form-group col-6\" (submit)=\"onSubmit()\" #formData=\"ngForm\">\n    Movie Title: <input\n      class=\"form-control\"\n      type=\"text\"\n      name=\"title\"\n      [(ngModel)]=\"thisMovie.title\"\n      required\n      minlength=\"3\"\n      #title=\"ngModel\"\n    >\n    Your Name: <input\n      class=\"form-control\"\n      type=\"text\"\n      name=\"name\"\n      [(ngModel)]=\"thisReview.name\"\n      required\n      minlength=\"3\"\n      #name=\"ngModel\"\n    >\n    Score: <input\n      class=\"form-control\"\n      type=\"number\"\n      name=\"score\"\n      [(ngModel)]=\"thisReview.score\"\n      required\n      min=\"1\"\n      max=\"5\"\n      #score=\"ngModel\"\n    >\n    Review Commentary: <input\n      class=\"form-control mb-5\"\n      type=\"text\"\n      name=\"comment\"\n      [(ngModel)]=\"thisReview.comment\"\n      required\n      minlength=\"3\"\n      #comment=\"ngModel\"\n    >\n    <input class=\"btn btn-success btn-sm mx-5\" id=\"submit\" type=\"submit\" value=\"Save\" [disabled]=\"formData.form.invalid\">\n    <a [routerLink]=\"['/']\" id=\"close-new-movie\" class=\"btn btn-danger btn-sm\">Cancel</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new-movie/new-movie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-movie/new-movie.component.ts ***!
  \**************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../movie */ "./src/app/movie.ts");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../review */ "./src/app/review.ts");






var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newMovieData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.thisMovie = new _movie__WEBPACK_IMPORTED_MODULE_4__["Movie"]();
        this.thisReview = new _review__WEBPACK_IMPORTED_MODULE_5__["Review"]();
    }
    NewMovieComponent.prototype.ngOnInit = function () {
    };
    NewMovieComponent.prototype.onSubmit = function () {
        this.thisMovie.reviews[0] = (this.thisReview);
        this._httpService.addMovie(this.thisMovie).subscribe(function (data) {
            console.log(data);
        });
        this.newMovieData.emit(this.thisMovie);
        this.thisMovie = new _movie__WEBPACK_IMPORTED_MODULE_4__["Movie"]();
        this.thisReview = new _review__WEBPACK_IMPORTED_MODULE_5__["Review"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewMovieComponent.prototype, "newMovieData", void 0);
    NewMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-movie',
            template: __webpack_require__(/*! ./new-movie.component.html */ "./src/app/new-movie/new-movie.component.html"),
            styles: [__webpack_require__(/*! ./new-movie.component.css */ "./src/app/new-movie/new-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], NewMovieComponent);
    return NewMovieComponent;
}());



/***/ }),

/***/ "./src/app/new-review/new-review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-review/new-review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form .ng-dirty.ng-invalid {\n    border-left: 5px solid red;\n}\nform .ng-dirty.ng-valid {\n    border-left: 5px solid green;\n}\nform .ng-dirty {\n    border-left: 5px solid gray;\n}\nform.ng-dirty {\n    border-left: 5px solid gray;\n}\nform.ng-valid {\n    border-left: 5px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJldmlldy9uZXctcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXZpZXcvbmV3LXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSAubmctZGlydHkubmctaW52YWxpZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XG59XG5mb3JtIC5uZy1kaXJ0eS5uZy12YWxpZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn1cbmZvcm0gLm5nLWRpcnR5IHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyYXk7XG59XG5cbmZvcm0ubmctZGlydHkge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JheTtcbn1cblxuZm9ybS5uZy12YWxpZCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/new-review/new-review.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-review/new-review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add a Review for </h3>\n<form class=\"form-group col-6\" (submit)=\"onSubmit()\" #formData=\"ngForm\">\n  Your Name: <input\n  class=\"form-control\"\n  type=\"text\"\n  name=\"name\"\n  [(ngModel)]=\"newReview.name\"\n  required\n  minlength=\"3\"\n  #name=\"ngModel\"\n  >\n  Score: <input\n  class=\"form-control\"\n  type=\"number\"\n  name=\"score\"\n  [(ngModel)]=\"newReview.score\"\n  required\n  min=\"1\"\n  max=\"5\"\n  #score=\"ngModel\"\n  >\n  Review Commentary: <input\n  class=\"form-control mb-5\"\n  type=\"text\"\n  name=\"comment\"\n  [(ngModel)]=\"newReview.comment\"\n  required\n  minlength=\"3\"\n  #comment=\"ngModel\"\n  >\n  <input class=\"btn btn-success btn-sm mx-5\" id=\"submit\" type=\"submit\" value=\"Save\" [disabled]=\"formData.form.invalid\">\n  <a [routerLink]=\"['/']\" id=\"close-new-movie\" class=\"btn btn-danger btn-sm\">Cancel</a>\n</form>"

/***/ }),

/***/ "./src/app/new-review/new-review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-review/new-review.component.ts ***!
  \****************************************************/
/*! exports provided: NewReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return NewReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../review */ "./src/app/review.ts");





var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newReview = new _review__WEBPACK_IMPORTED_MODULE_4__["Review"]();
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.movieId = params['id'];
        });
        this._httpService.getMovieById(this.movieId).subscribe(function (data) {
            _this.thisMovie = data;
        });
    };
    NewReviewComponent.prototype.onSubmit = function () {
        var _this = this;
        this._httpService.addReview(this.movieId, this.newReview).subscribe(function (data) {
            _this._router.navigate(['/']);
        });
    };
    NewReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-review',
            template: __webpack_require__(/*! ./new-review.component.html */ "./src/app/new-review/new-review.component.html"),
            styles: [__webpack_require__(/*! ./new-review.component.css */ "./src/app/new-review/new-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], NewReviewComponent);
    return NewReviewComponent;
}());



/***/ }),

/***/ "./src/app/review.ts":
/*!***************************!*\
  !*** ./src/app/review.ts ***!
  \***************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review(id, name, score, comment, created_at, updated_at) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = ""; }
        if (score === void 0) { score = null; }
        if (comment === void 0) { comment = ""; }
        if (created_at === void 0) { created_at = new Date(); }
        if (updated_at === void 0) { updated_at = new Date(); }
        this.id = id;
        this.name = name;
        this.score = score;
        this.comment = comment;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/view-movie/view-movie.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-movie/view-movie.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbW92aWUvdmlldy1tb3ZpZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view-movie/view-movie.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-movie/view-movie.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-dark my-5\">\n  <h3 class=\"d-inline-block\">{{thisMovie.title}}</h3>\n  <button (click)=\"deleteMovie()\" class=\"btn btn-secondary btn-sm ml-5 my-2\">Delete Movie</button>\n  <button (click)=\"goHome()\" class=\"btn btn-secondary btn-sm ml-5 my-2\">Go Back</button>\n\n  <table class=\"table table-striped col-10 mx-auto\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Reviewer</th>\n        <th>Score</th>\n        <th>Comment</th>\n        <th>Delete Review</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let review of thisMovie.reviews\">\n        <td>{{review.name}}</td>\n        <td>{{review.score}}</td>\n        <td>{{review.comment}}</td>\n        <td>\n          <button (click)=\"deleteReview($event)\" [id]=\"review['_id']\" class=\"btn btn-danger btn-sm\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/view-movie/view-movie.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-movie/view-movie.component.ts ***!
  \****************************************************/
/*! exports provided: ViewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMovieComponent", function() { return ViewMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http.service */ "./src/app/http.service.ts");




var ViewMovieComponent = /** @class */ (function () {
    function ViewMovieComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.returnData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ViewMovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.movieId = params['id'];
        });
        this._httpService.getMovieById(this.movieId).subscribe(function (data) {
            _this.thisMovie = data;
        });
    };
    ViewMovieComponent.prototype.deleteMovie = function () {
        var _this = this;
        this._httpService.removeMovie(this.movieId).subscribe(function (data) {
            _this._router.navigate(['/']);
        });
        this.returnData.emit(this.thisMovie);
    };
    ViewMovieComponent.prototype.deleteReview = function (e) {
        var reviewId = e.target.getAttribute('id');
        for (var i = 0; i < this.thisMovie.reviews.length; i++) {
            if (this.thisMovie.reviews[i]['_id'] == reviewId) {
                this.thisMovie.reviews.splice(i, 1);
            }
        }
        this._httpService.removeReview(this.movieId, reviewId).subscribe(function (data) {
        });
    };
    ViewMovieComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewMovieComponent.prototype, "returnData", void 0);
    ViewMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-movie',
            template: __webpack_require__(/*! ./view-movie.component.html */ "./src/app/view-movie/view-movie.component.html"),
            styles: [__webpack_require__(/*! ./view-movie.component.css */ "./src/app/view-movie/view-movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ViewMovieComponent);
    return ViewMovieComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jordan/Dojo/MEAN/Angular/belt_exam/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map