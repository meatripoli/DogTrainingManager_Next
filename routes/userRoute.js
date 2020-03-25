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
                res.status(200).json({
                  success:true,
                  redirectUrl: '/users',
                  query:{id:queryResp.id,user:queryResp.user,adminflag:queryResp.adminflag}
              })
            }
            else{
                console.log('password incorrect')
                //return message password not correct
            };
        });
    });

    server.get('/api/users',(req,res)=>{
        console.log('user get request server')
        //grab users from table
        db.user.findAll({attributes: ['id', 'user','adminflag']}).then((queryResp)=>{
            console.log(queryResp);
            res.json(queryResp);
        });
    });
};