const express = require('express');

const { restaurantController } = require('../controller/restaurantController');

const restaurantRouter = express.Router();

restaurantRouter.post('/', restaurantController.createRestaurant);
restaurantRouter.get('/', restaurantController.getRestaurantsForUsers);

module.exports = restaurantRouter;

