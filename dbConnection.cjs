//code for connection with mongodb

const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    dbConnection =MongoClient.connect('mongodb+srv://harsha:harsha123@cluster0.fqb1szh.mongodb.net/ExpenseTracker?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}

