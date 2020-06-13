const express = require('express');
const router = express.Router();
const client = require('./../controller/DBController');
const AuthController = require('./../controller/AuthorController');

router.get('/books', function(req, res){
    // const db = client.db('my-test-db');
    // const books = []
    // AuthController.createAuthor(db, authors, function(data){
    //     console.log(data)
    //     const result = {status:true, data:data};
    //     res.json(result);
    // });
});

router.get('/author/:n', function(req, res){
    console.log(req.params);
    // const db = client.db('my-test-db');
    // const authors = []
    // AuthController.createAuthor(db, authors, function(data){
    //     console.log(data)
    //     const result = {status:true, data:data};
    //     res.json(result);
    // });
});

module.exports = router;