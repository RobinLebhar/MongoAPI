module.exports = (server) => {

    server.get('/users',(req,res)=>{                       //  http://localhost:3050/users
        res.send({result:'Des users'})
    });
    server.get('/user/:numero',(req,res)=>{                    //  http://localhost:3050/user/1
        res.send({result:'Un utilisateur numero '+req.params.numero})
    });
}


