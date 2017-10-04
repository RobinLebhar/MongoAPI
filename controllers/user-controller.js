const User = require('../models/users');
module.exports = {
    
    readAll (req,res) {
        User.find().then( (users) =>{
             res.send(users);
        });
    },
    read (req,res) {
        const id = req.params.id;
        User.findById(id).then( (user) => {
             res.send({user});
        })
       
    },
    create(req,res){
        const body = req.body;
        const user = new User({name:body.name});
            user.save().then(() => {
                res.send(user);
            });
    },
        
    delete(req,res){
         const id = req.body.id;
         User.findByIdAndRemove(id).then( (user) =>{
             res.send({user});

         }); 
    },

    oldest(req,res){
        User.find().sort({'age':-1}).limit(2).then( (user) => {
             res.send({user});
        });
    },

     youngest(req,res){
        User.find().sort({'age':1}).limit(2).then( (user) => {
             res.send({user});
        });
    },
    
    hasLongestMovie(req,res){
            User.aggregate([
                { "$unwind": "$movies" } ,
                { $lookup:
                    {from: "MOVIE_COLLEC",
                    localField: "movies",
                    foreignField: "_id",
                    as: "movieContent"},
                } ,
                 { $unwind: "$movieContent" },
                 {$sort: {"movieContent.duration":-1}},
                 { $project: {  "User name":"$name","Movie title" : "$movieContent.title","Duration of movie" : "$movieContent.duration"}  }  ,
                 { $limit : 1 }

            ])
            .then( (result)=> {
                res.send(result)
            })
    }
};
