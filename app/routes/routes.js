module.exports = (function(app,passport){
    app.post('/v1/transactions/tokens', (req,res) => {
        console.log("Path: "+req.path);
        console.log(req.body)
        console.log("headers:")
        console.log(req.headers)
        res.send(req.body)
    });

    app.get('/', (req,res)=>{
        res.render('home.ejs')
    })
    
})
