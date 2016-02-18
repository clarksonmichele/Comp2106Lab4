var express = require('express');
var router = express.Router();

//home page GET - it lives in views //
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Clarkson Family' });
});

//Margaret page
router.get('/margaret', function(req, res, next) {
    //set variables to display in  mom ejs. view
    res.render('margaret', { 
        margaret: "Margaret",
        dog: "Maggie!",
        title: "Margaret"
    }
    );
});

//Don page
router.get('/don', function(req, res, next) {
    //set variables to display in don ejs. view
    res.render('don', { 
        don: "Don",
        boat: "Tall Ships!",
        title: "Don"
    }
    );
});

//Karen page
router.get('/karen', function(req, res, next) {
    //set variables to display in karen ejs. view
    res.render('karen', { 
        karen: "Karen",
        library: "Librarian!",
        title: "Karen"
    }
    );
});

//Michele page
router.get('/michele', function(req, res, next) {
    //set variables to display in michele ejs. view
    res.render('michele', { 
        michele: "Michele",
        loves: "Node.js!",
        title: "Michele"
    }
    );
});

module.exports = router;
