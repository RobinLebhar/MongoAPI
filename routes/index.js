UserController = require('../controllers/user-controller');
MovieController = require('../controllers/movie-controller');
module.exports = (server) => {
    // Envoi les parametres req et res de facon cachée a votre fonction.

    //USER
    server.get('/users',UserController.readAll);
    server.get('/user/:id',UserController.read);
    server.post('/user',UserController.create);
    server.delete('/user',UserController.delete);
   
    //MOVIE
    server.get('/movies',MovieController.readAll);
    server.get('/movie/:id',MovieController.read);
    server.post('/movie',MovieController.create);
    server.delete('/movie',MovieController.delete)
    
}


