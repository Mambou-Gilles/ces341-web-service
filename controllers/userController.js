const express = require('express');
const ObjectId = require('mongodb').ObjectId;
const database = require("../database/users");
// const { ObjectId } = require('mongodb');

const getSingle = async (req, res) => {
    const user_id = new ObjectId(req.params.id);
    const result = await database.getDatabase().db().collection('users').find({_id: user_id});
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', "application/json");
        res.status(200).json(users[0])
    }).catch((err) => {
        console.log("Error... ")
    })
}

const getAll = async (req, res) => {
    const result = await database.getDatabase().db().collection('users').find();
    result.toArray().then((users) =>{
        res.setHeader('Content-Type', "application/json");
        res.status(200).json(users)
    }).catch((err) => {
        console.log("Error... ")
    })


}

const createUser = async (req, res) => {
    const {firstName, lastName, email, favoriteColor, birthday} = req.body;
    await database.getDatabase().db().collection('users').insertOne(req.body)
    .then((users) =>{
        res.setHeader('Content-Type', "application/json");
        res.send(users)
    }).catch((err) => {
        console.log("Error... ")
    })

}

const updateUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    await database.getDatabase().db().collection('users').updateOne({_id: userId}, {$set: req.body})
    .then((users) =>{
        res.setHeader('Content-Type', "application/json");
        res.send(users)
    }).catch((err) => {
        console.log("Error with updating user. ")
    })
}

const deleteUser = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    await database.getDatabase().db().collection('users').deleteOne({_id: userId})
    .then((users) =>{
        res.setHeader('Content-Type', "application/json");
        res.send(users)
    }).catch((err) => {
        console.log("Error with deleting user. ")
    })
}

module.exports = {
    getSingle,
    getAll,
    createUser,
    updateUser,
    deleteUser
}
