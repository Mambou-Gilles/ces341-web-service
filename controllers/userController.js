/**
 * User Routes Module
 * 
 * This module defines the routes for handling user-related operations.
 * It provides functions to get a single user, get all users, create a new user,
 * update an existing user, and delete a user from the database.
 */

const express = require('express');
const { ObjectId } = require('mongodb'); // Import ObjectId to handle MongoDB ObjectIds
const database = require("../database/users"); // Import the database connection

/**
 * Get a single user by ID.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getSingle = async (req, res) => {
    try {
        const user_id = new ObjectId(req.params.id); // Get the user ID from the request parameters
        const result = await database.getDatabase().db().collection('users').find({ _id: user_id }); // Query the database
        result.toArray().then((users) => {
            res.setHeader('Content-Type', "application/json");
            res.status(200).json(users[0]); // Send the first user found
        }).catch((err) => {
            console.log("Error with retrieving user: ", err);
            res.status(500).send("Internal Server Error");
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
};

/**
 * Get all users.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAll = async (req, res) => {
    try {
        const result = await database.getDatabase().db().collection('users').find(); // Query the database for all users
        result.toArray().then((users) => {
            res.setHeader('Content-Type', "application/json");
            res.status(200).json(users); // Send all users found
        }).catch((err) => {
            console.log("Error with retrieving users: ", err);
            res.status(500).send("Internal Server Error");
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
};

/**
 * Create a new user.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body; // Destructure the user data from the request body
        await database.getDatabase().db().collection('users').insertOne(req.body)
            .then((result) => {
                res.setHeader('Content-Type', "application/json");
                res.status(201).send(result); // Send the result of the insertion
            }).catch((err) => {
                console.log("Error with creating user: ", err);
                res.status(500).send("Internal Server Error");
            });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
};

/**
 * Update an existing user by ID.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id); // Get the user ID from the request parameters
        await database.getDatabase().db().collection('users').updateOne({ _id: userId }, { $set: req.body })
            .then((result) => {
                res.setHeader('Content-Type', "application/json");
                res.status(200).send(result); // Send the result of the update
            }).catch((err) => {
                console.log("Error with updating user: ", err);
                res.status(500).send("Internal Server Error");
            });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
};

/**
 * Delete a user by ID.
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id); // Get the user ID from the request parameters
        await database.getDatabase().db().collection('users').deleteOne({ _id: userId })
            .then((result) => {
                res.setHeader('Content-Type', "application/json");
                res.status(200).send(result); // Send the result of the deletion
            }).catch((err) => {
                console.log("Error with deleting user: ", err);
                res.status(500).send("Internal Server Error");
            });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
};

// Export the route handlers to be used in other parts of the application
module.exports = {
    getSingle,
    getAll,
    createUser,
    updateUser,
    deleteUser
};
