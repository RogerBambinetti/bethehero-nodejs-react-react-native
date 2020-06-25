const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

routes.post('ongs', OngController.insert);
routes.get('ongs', OngController.index);

routes.post('incidents', OngController.insert);
routes.get('incidents', OngController.index);

module.exports = routes;