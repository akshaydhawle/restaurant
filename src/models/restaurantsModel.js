const mongoose = require('mongoose');

const options = { timestamps: true };

const restaurantSchema = new mongoose.Schema(
    {
        name: String,
        openTime: Number,
        closeTime: Number,
        openDays: [String],
        avgRating: Number,
        address: String,
        locationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'locations'
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        isActive: { type: Boolean, default: false },
        isOpen: { type: Boolean, default: true },
        image: String
    },
    options
);

const restaurantsModel = mongoose.model('restaurants', restaurantSchema);
module.exports = {
    restaurantsModel
}