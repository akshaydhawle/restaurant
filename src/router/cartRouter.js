const express = require('express');

const { cartController } = require('../controller/cartController');

const cartRouter = express.Router();

cartRouter.post('/', cartController.addToCart);
cartRouter.get('/', cartController.getAllCartsData);

module.exports = cartRouter;

