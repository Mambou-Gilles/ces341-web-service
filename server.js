/***********************************
 * Require Statements
 **********************************/
const express = require('express'); // Import the express module
const app = express(); // Create an express application instance
const route = require("./routes"); // Import the routes module
const path = require('path'); // Import the path module for file paths
const env = require("dotenv").config(); // Load environment variables from .env file
const database = require('./database/users'); // Import database initialization module
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON requests

/***********************************
 * MIDDLEWARE
 **********************************/
app.use(bodyParser.json()); // Parse JSON bodies of requests

/***********************************
 * Routes
 **********************************/
app.use("/", route); // Use routes defined in the "routes" module for all routes

/***********************************
 * Database Initialization
 **********************************/
database.initDb((err) => {
    if (err) {
        console.log(err); // Handle initialization error
    } else {
        /***********************************
         * Local Server Information
         **********************************/
        const port = process.env.PORT; // Get port number from environment variables
        const host = process.env.HOST; // Get host from environment variables

        /***********************************
         * Start Server
         **********************************/
        app.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    }
});
