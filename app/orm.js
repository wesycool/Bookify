const mongoose = require( 'mongoose' );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spartan" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require( './models' );

const orm = {
    businessList: async () => { return await db.Business.find({}) },
    
    postBusiness: async (body) => { return await db.Business.create(body) },
    findBusiness: async (id) => { return await db.Business.findOne({_id: mongoose.Types.ObjectId(id)}) },
    loginBusiness: async (email) => { return await db.Business.findOne({email}) },
    editBusiness: async ({body,params}) => { return await db.Business.findOneAndUpdate({_id: mongoose.Types.ObjectId(params.id)},body.data,{new:true}) },
    
    postUser: async (body) => { return await db.Users.create(body) },
    findUser: async (id) => { return await db.Users.findOne({_id: mongoose.Types.ObjectId(id)}) },
    loginUser: async (email) => { return await db.Users.findOne({email}) },
    editUser: async ({body,params}) => { return await db.Users.findOneAndUpdate({_id: mongoose.Types.ObjectId(params.id)},body.data,{new:true}) },

    postReservation: async (body) => { return await db.Reservation.create(body) },
    findBusinessReservation: async (id) => { return await db.Reservation.find({businessID: id}) },
    findUserReservation: async (id) => { return await db.Reservation.find({userID: id}) },
}


module.exports = orm
