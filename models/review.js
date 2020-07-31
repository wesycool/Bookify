const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    review: String,
    userID: {type: Schema.Types.ObjectId,ref: "User"},
    businessID: {type: Schema.Types.ObjectId,ref: "Business"}
});

const Review = mongoose.model("Exercise", reviewSchema);

module.exports = Review;