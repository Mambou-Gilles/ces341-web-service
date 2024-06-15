/**
 * User Router Module
 * 
 * This module defines routes for handling CRUD operations on user resources.
 * Each route corresponds to a specific operation (GET, POST, PUT, DELETE) and calls
 * corresponding functions from the userController.
 */

const express = require('express'); // Import the express module
const userRouter = express.Router(); // Create a new router instance
const userController = require('../controllers/userController'); // Import the user controller

/**
 * Get a single user by ID.
 * 
 * Route: GET /users/:id
 * Controller Function: userController.getSingle
 */
userRouter.get('/:id', userController.getSingle);

/**
 * Get all users.
 * 
 * Route: GET /users
 * Controller Function: userController.getAll
 */
userRouter.get('/', userController.getAll);

/**
 * Create a new user.
 * 
 * Route: POST /users/create
 * Controller Function: userController.createUser
 */
userRouter.post('/create', userController.createUser);

/**
 * Update an existing user by ID.
 * 
 * Route: PUT /users/update/:id
 * Controller Function: userController.updateUser
 */
userRouter.put('/update/:id', userController.updateUser);

/**
 * Delete a user by ID.
 * 
 * Route: DELETE /users/delete/:id
 * Controller Function: userController.deleteUser
 */
userRouter.delete('/delete/:id', userController.deleteUser);

// Export the router to be used in other parts of the application
module.exports = userRouter;
