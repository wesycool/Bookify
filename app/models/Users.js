const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    address2: String,
    city: String,
    province:String,
    postalCode: String,
    password: String,
    userCreated: {type: Date, default: Date.now},
    archieve: Boolean
});


const Users = mongoose.model("Users", userSchema);

module.exports = Users;
