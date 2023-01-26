const { MESSAGES, HTTP_CODES } = require("../constants/constants");
const { reviewsModel } = require("../models/reviewsModel")
const UtilService = require('../services/utils');

async function isUserAlreadyCommentedSame({ userId, comment }) {
    const isExists = await reviewsModel.findOne({ userId, comment });
    if (isExists) {
        throw UtilService.CustomError({ message: MESSAGES.ALREADY_COMMENTED, statusCode: HTTP_CODES.CONFLICT })
    }
}

async function saveComment(commentInfo) {
    return await reviewsModel(commentInfo).save();
}

async function getAllReviewsOfRestaurant({
    filter = {},
    sortColumn = '_id',
    sortDirection = 'DESC',
    page = 1,
    size = 10,
}) {
    let logger = `getAllReviewsOfRestaurant:`;
    console.log(`${logger} input values: filter, sortColumn, sortDirection, page, size`, filter, sortColumn, sortDirection, page, size);

    // convert the sortDirection in required syntax for mongodb
    sortDirection = sortDirection === 'ASC' ? 1 : -1;

    console.log(`${logger}: fetching comments of restaurants ... : `, JSON.stringify(filter));
    const comments = await reviewsModel.find({ ...filter })
        .populate({ path: "userId", select: ['_id', 'email', 'name'] })
        .limit(size)
        .skip((page - 1) * 10)
        .sort({ [sortColumn]: sortDirection });
    const commentsCount = await reviewsModel.countDocuments({ ...filter })

    console.log(`${logger}: comments count : ${commentsCount}`);

    const response = UtilService.formatResponseForPagination({
        data: comments,
        totalCount: commentsCount,
        page: page,
        size: size
    })
    console.log(`${logger}: formatedd result : ${JSON.stringify(response)}`);

    return response;
}


module.exports = {
    isUserAlreadyCommentedSame,
    saveComment,
    getAllReviewsOfRestaurant
}