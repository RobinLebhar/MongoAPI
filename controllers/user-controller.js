const User = require('../models/users');
module.exports = {
    readAll (req,res) {
        res.send({result:'Des users'});
    },
    read (req,res) {
        const id = req.params.id;
        res.send({result:'Un user avec id :' + id});
    },
    create(req,res){
        const body = req.body;
          const user = new User({name:body.name});
            user.save().then(() => {
                res.send({result:'Creation du user  :' + user});
            });
       
    }
};