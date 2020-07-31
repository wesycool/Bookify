const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    Date: Date,
    Price: Number,
    Status: String,
    userID: {type: Schema.Types.ObjectId,ref: "User"},
    businessID: {type: Schema.Types.ObjectId,ref: "Business"}
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;