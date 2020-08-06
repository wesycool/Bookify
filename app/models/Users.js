const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    userCreated: {type: Date, default: Date.now},
    archieve: Boolean
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;