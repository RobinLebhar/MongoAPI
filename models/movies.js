const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type : String
    },
     duration:{
         type : Number
     }

}, {versionKey: false} );

const Movie = mongoose.model('movie',movieSchema);


module.exports = Movie;

