ààconst mongoose = require('mongoose');
const Movie = require('./movies');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  movies:[{
    type : Schema.Types.ObjectId, 
    ref: 'movie'
  }],
   
},{collection: "USER_COLLEC"});

UserSchema.virtual('countMovies').get(function() {
  return this.movies.length;
});


UserSchema.pre('remove',function(next) {
  Movie.remove({_id: {$in : this.movies}}).then(() => {
    next();
  });
  
});

const User = mongoose.model('user',UserSchema);
module.exports = User;
