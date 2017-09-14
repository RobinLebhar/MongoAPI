const express = require('express');
const server = express();

const server = express();

server.get('/bonjour',(req,res)=>{
    res.send({result:'Un resultat'})
});

server.listen(3050, () =>{
    console.log("Ecoute sur le port 3050");
});
