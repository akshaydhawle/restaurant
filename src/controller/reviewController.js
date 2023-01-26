

const UtilService = require('../services/utils');
const reviewService = require('../services/reviewService');
const restaurantService = require('../services/restaurantService');
const userService = require('../services/userService');
const reviewValidation = require('../validation/reviewValidation');
const { MESSAGES, HTTP_CODES } = require('../constants/constants');

const reviewController = {
    postReview,
    getAllReviewOfRestaurants
};

async function postReview(req, res) {
    try {
        let logger = `reviewController: postReview`
        const { userId, comment } = req.body;

        // validate the user
        reviewValidation.validatePostReview(req.body);
        console.log(`${logger} - comment review validated`);

        // check if user exists and restaurant exists
        await userService.isUserValid({ key: '_id', value: userId });
        await restaurantService.isValidRestaurant({ id: restaurantService });

        // check if user already commented same text
        await reviewService.isUserAlreadyCommentedSame({ userId, comment });
        console.log(`${logger} - user has not commented with same text we've verified ...`,);

        // save the user in the database
        const reviewData = await reviewService.saveComment(req.body);
        console.log(`${logger} - comment saved in database`);

        console.log(`${logger} - comment posted success.`);
        return res.status(HTTP_CODES.OK).send({
            message: MESSAGES.POST_COMMENT,
            data: reviewData
        });
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

async function getAllReviewOfRestaurants(req, res) {
    try {
        let logger = `reviewController: getAllReviewOfRestaurants`
        console.log(`${logger}`);

        // validation
        const body = reviewValidation.validateGetAllReviewsOfRestaurant(req.query);

        // retrieving restaurants.
        console.log(`${logger} : retrieving comments ...`);
        const response = await reviewService.getAllReviewsOfRestaurant(body);
        console.log(`${logger} : sending response ...`, JSON.stringify(response));

        // adding message to response
        response.message = MESSAGES.RESTAURANT_GET_ALL;

        return res.status(HTTP_CODES.OK).send(response);
    } catch (error) {
        return UtilService.serverError({ res, error });
    }
}

module.exports = {
    reviewController
}