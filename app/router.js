const orm = require('./orm');

function router( app ){
    app.get('/api/business-list', async (req,res) =>{
        console.log(await orm.businessList())
    })
}

module.exports = router;