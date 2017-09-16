UserController = require('../controllers/user-controller');
MovieController = require('../controllers/movie-controller');
module.exports = (server) => {
    // Envoi les parametres req et res de facon cachée a votre fonction.

    //USER
    server.get('/users',UserController.readAll);
    server.get('/user/:id',UserController.read);
    server.post('/user',UserController.create);
    server.delete('/user',UserController.delete);
    server.get('/oldest/user',UserController.oldest);
    server.get('/youngest/user',UserController.youngest);
    server.get('/hasLongestMovie/user',UserController.hasLongestMovie);

    //MOVIE
    server.get('/movies',MovieController.readAll);
    server.get('/movie/:id',MovieController.read);
    server.post('/movie',MovieController.create);
    server.delete('/movie',MovieController.delete)
    
}


