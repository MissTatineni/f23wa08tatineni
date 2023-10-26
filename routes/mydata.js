var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // renders the 'mydata' view template with 'name' as the title of the resulting HTML page when a user accesses the root URL of the application.
  res.render('mydata', { title: 'Bhargavi Tatineni' });
});

module.exports = router;