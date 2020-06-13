const express = require('express');
const router = express.Router();
const client = require('./../controller/DBController');
const AuthorController = require('./../controller/AuthorController');
const { ObjectId } = require('mongodb');

router.get('/author', function(req, res){
    const db = client.db('my-test-db');
    const authors = [
        {
            "author_name":"mantu pani", 
            "author_address":'Bengaluru', 
            "mobile":'7873160006', 
            "email":'mantupani17@gmail.com',
            "author_dob":new Date("1991/11/5"),
            "noOfAwards" : 4,
            "totalBooksPublished" : 100,
            "totalBooksSold" : 1000,
            "awards" : [ 
                {
                    "award_name" : "ABC",
                    "year" : 1988
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 1985
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 1989
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2000
                }
            ],
            "sold_books" : [ 
                {
                    "book_id" : 1,
                    "price" : 200,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 2,
                    "price" : 500,
                    "totalSold" : 500
                }
            ]
        },
        {
            "author_name" : "mantu pani 1",
            "author_address" : "Bengaluru",
            "mobile" : "7873160003",
            "email" : "mantupani16@gmail.com",
            "noOfAwards" : 2,
            "totalBooksPublished" : 150,
            "totalBooksSold" : 1000,
            "awards" : [ 
                {
                    "award_name" : "ABC",
                    "year" : 1988
                }, 
                {
                    "award_name" : "XYZ",
                    "year" : 1985
                }
            ],
            "sold_books" : [ 
                {
                    "book_id" : 1,
                    "price" : 200,
                    "totalSold" : 200
                }, 
                {
                    "book_id" : 2,
                    "price" : 500,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 3,
                    "price" : 700,
                    "totalSold" : 300
                }
            ],
            "author_dob":new Date("1989/11/5")
        },
        {
            "author_name" : "mantu pani 3",
            "author_address" : "Bengaluru",
            "mobile" : "7873160004",
            "email" : "mantupani14@gmail.com",
            "noOfAwards" : 4,
            "totalBooksPublished" : 1500,
            "totalBooksSold" : 200,
            "awards" : [ 
                {
                    "award_name" : "MNO",
                    "year" : 1988
                }, 
                {
                    "award_name" : "XYZ",
                    "year" : 1985
                }, 
                {
                    "award_name" : "ZYX",
                    "year" : 1989
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2000
                }
            ],
            "sold_books" : [ 
                {
                    "book_id" : 1,
                    "price" : 200,
                    "totalSold" : 300
                }, 
                {
                    "book_id" : 2,
                    "price" : 500,
                    "totalSold" : 300
                }, 
                {
                    "book_id" : 3,
                    "price" : 700,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 4,
                    "price" : 700,
                    "totalSold" : 400
                }
            ],
            "author_dob":new Date("1985/11/5")
        },
        {
            "author_name" : "mantu pani 2",
            "author_address" : "Bengaluru",
            "mobile" : "7873160002",
            "email" : "mantupani15@gmail.com",
            "noOfAwards" : 4,
            "totalBooksPublished" : 1500,
            "totalBooksSold" : 100,
            "awards" : [ 
                {
                    "award_name" : "ABC",
                    "year" : 2002
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2001
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2003
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2000
                }
            ],
            "sold_books" : [ 
                {
                    "book_id" : 1,
                    "price" : 200,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 2,
                    "price" : 500,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 3,
                    "price" : 700,
                    "totalSold" : 500
                }
            ],
            author_dob:new Date("1990/11/5")
        },
        {
            "author_name" : "mantu pani 4",
            "author_address" : "Bengaluru",
            "mobile" : "7873160005",
            "email" : "mantupani15@gmail.com",
            "noOfAwards" : 5,
            "totalBooksPublished" : 150,
            "totalBooksSold" : 2000,
            "awards" : [ 
                {
                    "award_name" : "MNO",
                    "year" : 1988
                }, 
                {
                    "award_name" : "XYZ",
                    "year" : 1985
                }, 
                {
                    "award_name" : "ZYX",
                    "year" : 1989
                }, 
                {
                    "award_name" : "ABC",
                    "year" : 2000
                }, 
                {
                    "award_name" : "PQR",
                    "year" : 2000
                }
            ],
            "sold_books" : [ 
                {
                    "book_id" : 1,
                    "price" : 200,
                    "totalSold" : 300
                }, 
                {
                    "book_id" : 2,
                    "price" : 500,
                    "totalSold" : 300
                }, 
                {
                    "book_id" : 3,
                    "price" : 700,
                    "totalSold" : 500
                }, 
                {
                    "book_id" : 4,
                    "price" : 700,
                    "totalSold" : 400
                }, 
                {
                    "book_id" : 5,
                    "price" : 700,
                    "totalSold" : 400
                }, 
                {
                    "book_id" : 6,
                    "price" : 400,
                    "totalSold" : 100
                }
            ],
            "author_dob":new Date("1987/11/5")
        }
    ]
    AuthorController.createAuthors(db, authors, function(error, data){
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

router.get('/author/profit/:author_id', function(req, res){
    const db = client.db('my-test-db');
    let author_id = req.params.author_id;
    let where = {};
    if(author_id){
        if (ObjectId.isValid(author_id)) {
            author_id = ObjectId(author_id);
            where = { _id:author_id };
        }
    }
    AuthorController.getAllTotalProfitByAuthor(db,  where , {}, function(error, data){
        const result = {status:true, data:data};
        res.json(result);
    })
});

router.get('/author/awards/:n', function(req, res){
    const db = client.db('my-test-db');
    var noOfAwards = req.params.n || 0;
    console.log("condition=====")
    if(noOfAwards){
        noOfAwards = parseInt(noOfAwards);
        AuthorController.getAuthorsByNoOfAwards(db, {noOfAwards:{$gte:noOfAwards}} , function(error, data){
            console.log(data)
            const result = {status:true, data:data};
            res.json(result);
        })
    }
});

router.get('/author/dob/:author_dob/totalPrice/:totalPrice', function(req, res){
    const db = client.db('my-test-db');
    let author_dob = req.params.author_dob;
    let totalPrice = req.params.totalPrice;
    let where = {};
    let afterWhere = {};
    if(author_dob){
        where['author_dob'] = { $gte : new Date(author_dob) }
    }
    if(totalPrice){
        afterWhere['totalProfit'] = {$gte:parseInt(totalPrice)}
    }
    console.log({where ,afterWhere})
    AuthorController.getAllTotalProfitByAuthor(db,  where , afterWhere, function(error, data){
        const result = {status:true, data:data};
        res.json(result);
    })
});


module.exports = router;