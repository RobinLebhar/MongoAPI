const mongoose = require('mongoose');
const Movie = require('./movies');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  movies:[{
    type : Schema.Types.ObjectId, 
    ref: 'movie'
  }]
});

UserSchema.virtual('countMovies').get(function() {
  return this.movies.length;
});


UserSchema.pre('remove',function(next) {
  BlogBook.remove({_id: {$in : this.movies}}).then(() => {
    next();
  });
  
});

const User = mongoose.model('user',UserSchema);
module.exports = User;