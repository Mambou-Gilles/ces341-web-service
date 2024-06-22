const express = require('express');
const router = express.Router(); // Create a new router instance
const users = require('./users'); // Import the users route handlers
const swagger = require("./swagger");
const temple = require('./temple'); // Import the temples route handlers

router.use("/", swagger);

//This mounts the users route handlers at the /users endpoint.
router.use('/users', users);

//This mounts the temples route handlers at the /temples endpoint.
router.use('/temples', temple);

/**
 * Serve the index page.
 * 
 * This route serves the index.html file or a simple text response for the root URL.
 * Uncomment the res.sendFile line to serve an actual HTML file.
 */
router.get('/', (req, res) => {
    // For now, send a simple text response
    res.send('This is a Hello World!');
});

// Export the router to be used in other parts of the application
module.exports = router;
