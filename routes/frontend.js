const express = require('express');
const router = express.Router();
const path = require('path')

class WebApi {

    constructor(){
        console.log('hello constructor is called')
    }

    callIndex(req, res, next){
        console.log('return index file');
        res.sendFile(path.join(__dirname, '../public/views', 'index.html')); 
    }

    callbackPage(req, res, next){
        console.log('return callback file');
        res.sendFile(path.join(__dirname, '../public/views', 'callback.html')); 
    }

}

const webapi = new WebApi();

router.get('/', webapi.callIndex);
router.get('/callback', webapi.callbackPage);


module.exports = router;