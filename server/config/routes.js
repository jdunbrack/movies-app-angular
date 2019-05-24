const bP = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const movies = require('./../controllers/movies');
const path = require('path');

module.exports = (app) => {

    app.use(session({
        secret: 'dunbrack',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
    }));

    app.use(flash());

    app.use(bP.json());
    app.use(bP.urlencoded({extended: true}));

    app.get('/api/movies', (req, res) => {
        movies.getAllMovies(req, res);
    });

    app.get('/api/movies/:id', (req, res) => {
        movies.findMovieById(req, res);
    });

    app.post('/api/movies', (req, res) => {
        movies.addMovie(req, res);
    });

    app.put('/api/movies/:id', (req, res) => {
        movies.addReview(req, res);
    });

    app.delete('/api/movies/:id', (req, res) => {
        movies.destroyMovie(req, res);
    });

    app.delete('/api/movies/:id/reviews/:review_id', (req, res) => {
        movies.destroyReview(req, res);
    });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve('./../../public/dist/public/index.html'));
    });

    app.listen(8080, () => {console.log("Server running at localhost:8080")});
}