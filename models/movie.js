let mongoose = require('mongoose');
let movieSchema = require('../schemas/movie');

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;