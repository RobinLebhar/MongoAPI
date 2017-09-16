const Movie = require('../models/movies');
module.exports = {
    
    readAll (req,res) {
        Movie.find().then( (movies) =>{
             res.send(movies);
        });
    },
    read (req,res) {
        const id = req.params.id;
        Movie.findById({_id:id}).then( (movie) => {
             res.send({movie});
        })
       
    },
    create(req,res){
        const title = req.body.title;
        const duration = req.body.duration
        const movie = new Movie({title,duration});
            movie.save().then(() => {
                res.send({movie});
            });
    },
        
    delete(req,res){
         const id = req.body.id;
         Movie.findByIdAndRemove({_id:id}).then( (movie) =>{
             res.send({movie});
         }); 
    },

    
};