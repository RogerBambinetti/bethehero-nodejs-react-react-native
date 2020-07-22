const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/ongs', OngController.insert);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.insert);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('profile', ProfileController.index);

routes.post('/sessions',SessionController.insert);
module.exports = routes;