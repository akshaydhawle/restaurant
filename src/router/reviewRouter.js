const express = require('express');

const { reviewController } = require('../controller/reviewController');

const reviewRouter = express.Router();

reviewRouter.post('/', reviewController.postReview);
reviewRouter.get('/', reviewController.getAllReviewOfRestaurants);

module.exports = reviewRouter;

