const orm = require('./orm');

function router( app ){
    app.get('/api/business-list', async (req,res) =>{
        res.send(await orm.businessList())
    })

    
    app.post('/api/new-business', async (req,res) =>{
        await orm.postBusiness(req.body.data)
        res.send('success')
    })
    app.get('/api/get-business/:id', async (req,res) =>{
        res.send(await orm.findBusiness(req.params.id))
    })
    app.put('/api/edit-business/:id', async (req,res) =>{
        res.send(await orm.editBusiness(req))
    })



    app.post('/api/new-user', async (req,res) =>{
        await orm.postUser(req.body.data)
        res.send('success')
    })
    app.get('/api/get-user/:id', async (req,res) =>{
        res.send(await orm.findUser(req.params.id))
    })
    app.put('/api/edit-user/:id', async (req,res) =>{
        res.send(await orm.editUser(req))
    })
}

module.exports = router;