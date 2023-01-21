const express = require('express');

const { locationController } = require('../controller/locationController');

const locationRouter = express.Router();

locationRouter.post('/', locationController.createLocation);
locationRouter.get('/', locationController.getAllLocations);

module.exports = locationRouter;

