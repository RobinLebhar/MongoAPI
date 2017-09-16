UserController = require('../controllers/user-controller');
module.exports = (server) => {
    // Envoi les parametres req et res de facon cachée a votre fonction.
    server.get('/users',UserController.readAll);
    server.get('/user/:id',UserController.read);
    server.post('/user',UserController.create);
}


