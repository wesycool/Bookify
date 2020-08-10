const express = require('express')
const apiRouter = require('./app/router')
const app = express()
const orm = require('./app/orm.js');
const mongoose = require( 'mongoose' );
const API_URL = process.env.NODE_ENV === 'production' ? 'https://spartans-bookify.herokuapp.com' : 'http://localhost:8080'

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spartan" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

 // for serving all the normal html
app.use( express.static('client/build') )
// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// for routes
apiRouter(app)

app.get('/*', function (req, res) {
    console.log( `[/*] (${req.protocol}//${req.get('host')}/${req.originalUrl} -- sending file: ${__dirname}/client/build/index.html` );
    res.sendFile(`${__dirname}/client/build/index.html`);
 });
 

app.listen(PORT, function() {
    console.log( `Serving app at: http://localhost:${PORT}` )
})
