const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    address1: String,
    address2: String,
    city: String,
    province: String,
    email: String,
    phone: Number,
    userCreated: {type: Date, default: Date.now},
    archieve: Boolean
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;