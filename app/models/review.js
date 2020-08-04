const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review: String,
    rating: Number,
    userID: String,
    businessID: String
});

const Review = mongoose.model("Exercise", reviewSchema);

module.exports = Review;