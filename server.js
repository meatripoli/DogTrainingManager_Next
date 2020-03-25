require("dotenv").config();
const express = require('express');
const next = require('next');
// const bodyParser = require('body-parser')
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
    
    require('./routes/userRoute')(handle,server);   
    require('./routes/formRoute')(handle,server);   
    require('./routes/htmlRoute')(handle,server); 
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