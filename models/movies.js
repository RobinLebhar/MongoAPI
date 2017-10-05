const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type : String
    },
     duration:{
         type : Number
     }

},{collection: "MOVIE_COLLEC"});

const Movie = mongoose.model('movie',movieSchema);


module.exports = Movie;

