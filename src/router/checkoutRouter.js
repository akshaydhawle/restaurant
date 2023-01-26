const express = require('express');

const { checkoutController } = require('../controller/checkoutController');

const checkoutRouter = express.Router();

checkoutRouter.post('/', checkoutController.placeOrder);

module.exports = checkoutRouter;

