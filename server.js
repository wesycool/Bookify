// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// mongoose.connect("mongodb://localhost/spartan", {
//   useNewUrlParser: true, 
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

// app.use(require("./routes/api.js"));



const express = require('express')
const apiRouter = require('./app/router')
const app = express()

const PORT = process.env.PORT || 8080

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// for serving all the normal html
app.use( express.static('client/build') )

// for routes
apiRouter(app)

app.listen(PORT, function() {
    console.log( `Serving app at: http://localhost:${PORT}` )
})
