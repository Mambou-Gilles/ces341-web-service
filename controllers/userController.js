const express = require('express');
const mongoClient = require('mongodb').ObjectId;
const database = require("../database/users");
const { ObjectId } = require('mongodb');

const getSingle = async (req, res) => {
    const user_id = new mongoClient(req.params.id);
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

module.exports = {
    getSingle,
    getAll
}
