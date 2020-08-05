const mongoose = require( 'mongoose' );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spartan" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require( './models' );

const orm = {
    businessList: async () => { return await db.Business.find({}) },
    postBusiness: async (body) => { return await db.Business.create(body) }
}


module.exports = orm
