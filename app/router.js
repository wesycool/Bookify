const orm = require('./orm');

function router( app ){
    app.get('/api/business-list', async (req,res) =>{
        res.send(await orm.businessList())
    })
    app.post('/api/business-list', async (req,res) =>{
        await orm.postBusiness(req.body)
        res.send('success')
    })
}

module.exports = router;