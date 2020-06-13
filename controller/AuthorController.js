const assert = require('assert');
const AuthorController = {
    createAuthors: function(db, authors, cb){
        const Authors = db.collection('authors');
        Authors.insertMany(authors , function(err, result) {
            if(err){
                cb(err, []);
            }
            assert.equal(err, null);
            console.log(result)
            cb(null ,result);
        });
    },

    getAuthorsByNoOfAwards: function(db, where, cb){
        const Authors = db.collection('authors');
        where = where || {};
        Authors.find(where).toArray(function(err, docs) {
            if(err){
                cb(err, []);
            }
            assert.equal(err, null);
            console.log("Found the following records");
            cb(null, docs);
          });
    },

    getAuthorsByAwardYear: function(db, where, cb){
        const Authors = db.collection('authors');
        where = where || {};
        Authors.find(where).project({author_name:1, author_address:1, mobile:1, email:1}).toArray(function(err, docs) {
            if(err){
                cb(err, []);
            }
            assert.equal(err, null);
            console.log("Found the following records");
            cb(null, docs);
          });
    },

    getAllTotalProfitByAuthor : function(db, where, afterWhere, cb){
        const Authors = db.collection('authors');
        where = where || {};
        afterWhere = afterWhere || {};
        Authors.aggregate([
            {$match:where},
            {$unwind:"$sold_books"},
            {$group:{_id:"$_id" , 
                "totalBooksSold":{$sum:"$sold_books.price"} , 
                "totalProfit":{$sum: { $multiply: [ "$sold_books.price", "$sold_books.totalSold" ] } }
            }} ,
            {$match:afterWhere} 
        ]).toArray(function(err, results) {
            if(err){
                cb(err, []);
            }
            cb(null, results);
        });
    }

};


module.exports = AuthorController;