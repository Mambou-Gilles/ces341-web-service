/***********************************
 * Require Statements
 **********************************/
const express = require('express'); // Import the express module
const app = express(); // Create an express application instance
const route = require("./routes"); // Import the routes module
const cors = require('cors');
const path = require('path'); // Import the path module for file paths
const env = require("dotenv").config(); // Load environment variables from .env file
const database = require('./database/users'); // Import database initialization module
const bodyParser = require('body-parser'); // Import body-parser for parsing JSON requests
// const swaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./models/swagger.json');


/***********************************
 * MIDDLEWARE
 **********************************/
// Parse JSON bodies
app.use(bodyParser.json());
// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
/***********************************
 * Routes
 **********************************/
  .use("/", route); // Use routes defined in the "routes" module for all routes



/***********************************
 * Database Initialization (Week 1 using mongodb)
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

//Connecting using Mongoose
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

