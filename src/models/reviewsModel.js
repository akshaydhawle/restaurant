const mongoose = require('mongoose');

const options = { timestamps: true };

const reviewsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        comment: String,
        rating: Number
    },
    options
);

const reviewsModel = mongoose.model('reviews', reviewsSchema);
module.exports = {
    reviewsModel
}