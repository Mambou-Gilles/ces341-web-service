/**
 * Express Router Module
 * 
 * This module sets up the Express router for handling user-related routes and serving the index page.
 */

const express = require('express'); // Import the express module
const router = express.Router(); // Create a new router instance
const users = require('./users'); // Import the users route handlers

/**
 * Mount the users route.
 * 
 * This mounts the users route handlers at the /users endpoint.
 */
router.use('/users', users);

/**
 * Serve the index page.
 * 
 * This route serves the index.html file or a simple text response for the root URL.
 * Uncomment the res.sendFile line to serve an actual HTML file.
 */
router.get('/', (req, res) => {
    // Uncomment the following line to serve an actual index.html file
    // res.sendFile(path.join(__dirname, 'frontend', 'index.html'));

    // For now, send a simple text response
    res.send('This is our Node API');
});

// Export the router to be used in other parts of the application
module.exports = router;
