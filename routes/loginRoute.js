const bodyParser = require('body-parser');
var db = require("../models");

module.exports = (handle,server) => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json());
    server.post('/login',(req,res)=>{
        console.log('login post request server')
        console.log(req.body)
        //check bcrypt
        //checkdatabase to see if user and password match
        db.user.findOne({
            where: {
                user: req.body.user
            }
        }).then((queryResp)=>{
            if(queryResp.password === req.body.password){
                console.log('password correct')
                //send to profile page once authenticated
                ///res.redirect('/profile')
            }
            else{
                console.log('password incorrect')
                //return message password not correct
            }
        });
    })
};