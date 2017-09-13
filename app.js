const express = require('express');

const app = express();
app.get('/home',(req,res)=>{
    res.send({result:'Un resultat'})
});
module.exports = app; 