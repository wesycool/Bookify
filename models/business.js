const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessType: String,
    businessName: String,
    address1: String,
    address2: String,
    city: String,
    province: String,
    email: String,
    phone: Number,
    archieve: Boolean
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;