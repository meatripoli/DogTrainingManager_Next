const bodyParser = require('body-parser');
const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (handle,server) => {
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json());
    server.post('/login',(req,res)=>{
        db.user.findOne({
            where: {
                user: req.body.user
            }
        }).then((queryResp)=>{    
            //check password provided against password in database  
            bcrypt.compare(req.body.password, queryResp.password, (err, response) => {
                if (err) {
                    console.error(err)
                    res.status(401);
                }
                response?
                res.status(200).json({
                    success:true,
                    redirectUrl: '/dogs',
                    message: 'password correct',
                    data: queryResp
                }):
                res.status(401).json({
                    success:false,
                    redirectUrl: '/',
                    message: 'password incorrect',
                    data: ''
                });
            });  
        }).catch((error) => {
            res.status(401);
            res.json({error:error, stackError:error.stack});
        });
    });

    server.get('/api/users',(req,res)=>{
        db.user.findAll({attributes: ['id', 'user','adminflag']}).then((queryResp)=>{
            res.json(queryResp);
        });
    });

    server.post('/api/users',(req,res)=>{
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
                console.error(err)
                res.status(500)
            }
            db.user.create({
                user: req.body.username,
                password: hash, 
                adminflag: req.body.admin
            }).then((queryResp) => {
                res.status(200);
                res.json(queryResp);
            }).catch((error) => {
                error.name === 'SequelizeUniqueConstraintError'? res.status(409):res.status(500);
                res.json({error:error, stackError:error.stack});
            });
        });
    });

    server.delete('/api/users',(req,res)=>{
        if(req.body.adminflag==='no'){
            db.user.destroy({
                where: {
                    id: parseInt(req.body.id)
                }
            }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
            if(rowDeleted === 1){
                    res.status(200);
                    res.json(rowDeleted);
                }
            })
        }
        else{
            res.json({status: 409});
        };
    });
};