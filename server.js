/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const app = express();
const route = require("./routes");
const path = require('path');
const env = require("dotenv").config();
const database = require('./database/users');

// Serve static files from the "frontend" directory
// app.use(express.static(path.join(__dirname, 'frontend')));
app.use("/", route)



/* ***********************
 * Routes
 *************************/
app.use("/", route);

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

   