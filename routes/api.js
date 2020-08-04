const router = require("express").Router();
const {Business} = require('../app/models/index.js')

router.get("/api/business-list", (req,res) =>{
    Business.find({})
    .then( dbBusiness => {
        res.json(dbBusiness)
    })
    .catch(err => {
        res.json(err);
      });
})

module.exports = router;