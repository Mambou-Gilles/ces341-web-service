/**
 * MongoDB Database Initialization and Access Module
 * 
 * This module handles the initialization and access to the MongoDB database.
 * It provides functions to initialize the database connection and retrieve the database instance.
 */

const { MongoClient } = require('mongodb'); // Import the MongoClient class from mongodb package
const dotenv = require('dotenv').config(); // Load environment variables from .env file

let database; // Variable to hold the database instance

/**
 * Initialize the database connection.
 * 
 * This function initializes the database connection and sets the database instance.
 * It uses the connection string from the environment variables.
 * 
 * @param {function} callback - Callback function to handle the result of the database initialization
 */
const initDb = (callback) => {
    try {
        // Check if the database is already initialized
        if (database) {
            console.log("Database is already initialized");
            return callback(null, database); // Return the existing database instance
        }
        
        // Connect to the MongoDB server using the connection string from environment variables
        MongoClient.connect(process.env.DATABASE_URL)
            .then((client) => {
                database = client; // Set the database instance
                return callback(null, database); // Return the new database instance
            })
            .catch((err) => {
                callback(err); // Handle connection errors
            });
    } catch (err) {
        callback(err); // Handle any other errors
    }
};

/**
 * Get the database instance.
 * 
 * This function returns the database instance if it is initialized.
 * If the database is not initialized, it throws an error.
 * 
 * @returns {Object} - The database instance
 * @throws {Error} - If the database is not initialized
 */
const getDatabase = () => {
    if (!database) {
        throw new Error("Database not initialized"); // Throw an error if the database is not initialized
    } else {
        return database; // Return the database instance
    }
};

// Export the database initialization and access functions
module.exports = {
    initDb,
    getDatabase
};
