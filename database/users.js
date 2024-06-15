const mongoClient = require('mongodb').MongoClient;
const env = require("dotenv").config();

let database;

const initDb = (callback) => {
    try {
        if (database){
            console.log("database is initialized")
            return callback(null, database);
        }
        mongoClient.connect(process.env.DATABASE_URL)
        .then((client) =>{
            database = client;
            return callback(null, database);
        })
    }
    catch(err) {
        callback(err);
    }
}

const getDatabase = () =>{
    if (!database){
        throw Error("database not initialized");
    } else {
        return database;
    }
}

module.exports = {
    initDb,
    getDatabase
}