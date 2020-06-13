const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'my-test-db';

const client = new MongoClient(dbUrl);
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    client.db(dbName);
});



module.exports =  client;