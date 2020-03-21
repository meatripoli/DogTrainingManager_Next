require("dotenv").config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser')
var db = require("./models");
    
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// If running a test, set syncOptions.force to true
// clearing the `testdb`
const syncOptions = process.env.NODE_ENV === "test"? { force: true }:{ force: false };

app.prepare()
.then(() => {
    const server = express();
    //Routes
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(bodyParser.json());
    server.post('/login',(req,res)=>{
      console.log('post request server')
      console.log(req.body)
      //send to profile page once authenticated
      ///res.redirect('/profile')
    })
    server.get('*', (req, res) => {
      return handle(req, res);
    });    
    
    // Starting the server, syncing our models
    db.sequelize.sync(syncOptions)
    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    })

})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})