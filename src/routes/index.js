const express = require('express');
const router = express.Router();
const actorRouter = require('./actor.router');
const directorRouter = require('./director.router');
const genreRouter = require('./genre.router');
const movieRouter = require('./movie.router');

// colocar las rutas aquí
router.use('/movies', movieRouter);
router.use('/actors', actorRouter);
router.use('/directors',directorRouter);
router.use('/genres', genreRouter);

module.exports = router;