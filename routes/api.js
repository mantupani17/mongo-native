const express = require('express');
const router = express.Router();
const client = require('./../controller/DBController');
const AuthorController = require('./../controller/AuthorController');

router.get('/author', function(req, res){
    const db = client.db('my-test-db');
    const authors = [
        {
            author_name:"mantu pani", 
            author_address:'Bengaluru', 
            mobile:'7873160006', 
            email:'mantupani17@gmail.com',
            noOfAwards:10,
            totalBooksPublished:100
        },
        {
            author_name:"mantu pani 1", 
            author_address:'Bengaluru', 
            mobile:'7873160003', 
            email:'mantupani16@gmail.com',
            noOfAwards:20,
            totalBooksPublished:150
        },
        {
            author_name:"mantu pani 2", 
            author_address:'Bengaluru', 
            mobile:'7873160002', 
            email:'mantupani15@gmail.com',
            noOfAwards:2,
            totalBooksPublished:1500
        },
        {
            author_name:"mantu pani 3", 
            author_address:'Bengaluru', 
            mobile:'7873160004', 
            email:'mantupani14@gmail.com',
            noOfAwards:4,
            totalBooksPublished:1500
        },
        {
            author_name:"mantu pani 4", 
            author_address:'Bengaluru', 
            mobile:'7873160005', 
            email:'mantupani15@gmail.com',
            noOfAwards:15,
            totalBooksPublished:150
        }
    ]
    AuthorController.createAuthors(db, authors, function(error, data){
        console.log(data)
        const result = {status:true, data:data};
        res.json(result);
    });
});



// { awards: { $elemMatch: { year: { $gte: 2000 } } } }
router.get('/author/year/:year', function(req, res){
    const db = client.db('my-test-db');
    var year = req.params.year || 0;
    if(year){
        year = parseInt(year);
        AuthorController.getAuthorsByAwardYear(db, 
            { awards: { $elemMatch: { year: { $gte: year } } } } , function(error, data){
            console.log(data)
            const result = {status:true, data:data};
            res.json(result);
        })
    }
});

router.get('/author/:n', function(req, res){
    const db = client.db('my-test-db');
    var noOfAwards = req.params.n || 0;
    if(noOfAwards){
        noOfAwards = parseInt(noOfAwards);
        AuthorController.getAuthorsByNoOfAwards(db, {noOfAwards:{$gte:noOfAwards}} , function(error, data){
            console.log(data)
            const result = {status:true, data:data};
            res.json(result);
        })
    }
});

module.exports = router;