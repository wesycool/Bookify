const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    Date: {type: Date,default: Date.now},
    review: String,
    rating: Number,
    userID: String,
    businessID: String
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;