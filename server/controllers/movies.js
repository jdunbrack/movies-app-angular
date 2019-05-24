const mongoose = require('mongoose');
const Models = require('./../models/movie')();
const Movie = Models[0];
const Review = Models[1];

module.exports = {
    getAllMovies: (req, res) => {
        Movie.find({}, (err, data) => {
            if (err) {
                res.json({message: "Error!", data});
            } else {
                res.json(data);
            }
        });
    },
    findMovieById: (req, res) => {
        Movie.findById(req.params.id, (err, data) => {
            if (err) {
                res.json({message: "Error!", data});
            } else {
                res.json(data);
            }
        });
    },
    addMovie: (req, res) => {
        var newMovie = new Movie(req.body);

        newMovie.save(err => {
            if (err) {
                for (var key in err.errors) {
                    req.flash('movie', err.errors[key].message);
                }

                res.json({message: "Error!", err});
            } else {
                res.json(newMovie);
            }
        })
    },
    addReview: (req, res) => {
        var newReview = new Review(req.body);

        Movie.findByIdAndUpdate(req.params.id, {$push: {reviews: newReview}}, (err, data) => {
            if (err) {
                res.json({message: "Error!", data});
            } else {
                res.json(data);
            }
        });
    },
    destroyMovie: (req, res) => {
        Movie.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) {
                res.json({message: "Error!", data});
            } else {
                res.json(data);
            }
        })
    },
    destroyReview: (req, res) => {
        Movie.findById(req.params.id, (err, data) => {
            if (err) {
                res.json({message: "Error!", data});
            } else {
                let movie = data;
                movie.reviews.id(req.params.review_id).remove();
                movie.save(err => {
                    if (err) {
                        res.json({message: "Error!", data});
                    } else {
                        res.json(data);
                    }
                })
            }
        })
    }
}