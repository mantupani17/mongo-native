var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
// custom router mounting
const apis = require('./routes/api');

// body-parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));       


// set static path
app.use(express.static(path.join(__dirname, 'public')));


// mounting router
app.use('/api', apis);




app.listen(3000);
console.log('running on 3000');