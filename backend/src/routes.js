const express = require('express');

const OngController = require('./controllers/OngController');
const incidents = require('./controllers/IncidentsController');
const Profile = require('./controllers/ProfileController');
const sessions = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',sessions.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',Profile.index);

routes.get('/incidents',incidents.index);
routes.post('/incidents',incidents.create);
routes.delete('/incidents/:id', incidents.delete);

module.exports = routes;