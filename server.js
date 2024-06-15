/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const app = express();
const route = require("./routes");
const path = require('path');
const env = require("dotenv").config();
const database = require('./database/users');
const bodyParser = require('body-parser');


/***************************
 * MIDDLEWARE
 **************************/
app.use(bodyParser.json());



/* ***********************
 * Routes
 *************************/
app.use("/", route);
// Serve static files from the "frontend" directory
// app.use(express.static(path.join(__dirname, 'frontend')));

database.initDb((err) =>{
    if(err){
        console.log(err);
        
    } else {
        /* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;


/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`Database is listening and node is running on ${host}:${port}`)
});
    }
    
});

   