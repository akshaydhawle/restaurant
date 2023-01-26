const express = require('express');

const { restaurantController } = require('../controller/restaurantController');

const restaurantRouter = express.Router();

restaurantRouter.post('/', restaurantController.createRestaurant);
restaurantRouter.get('/', restaurantController.getRestaurantsForUsers);
restaurantRouter.get('/:_id', restaurantController.getRestaurantInformation);
restaurantRouter.get('/:_id', restaurantController.getRestaurantInformation);
restaurantRouter.get('/activate/:restaurantId', restaurantController.activateRestaurant);

module.exports = restaurantRouter;

