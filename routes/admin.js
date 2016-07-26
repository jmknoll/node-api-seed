var express = require('express');
var router = express.Router();


//var ctrlAdmin = require('../controllers/admin');

router.get('/', function(req, res, next){
  console.log('hitting the admin root endpoint')
  res.render('index', {}, function(err, html){
    res.send(html)
  });
})


module.exports = router;
