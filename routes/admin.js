var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Race = mongoose.model('Race');
var fs = require('fs');
var path = require('path');


//var ctrlAdmin = require('../controllers/admin');

router.get('/', function(req, res){
  console.log('rendering index')
  res.render('index', {title: 'Admin Dashboard Index Page'}, function(err, html){
    console.log('results of res.render callback function');
    res.send(html)
  })
})

router.get('/test',  function(res, res){
  res.send('App is up and running')
})

router.post('/race/create', function(req, res){
  console.log('Executing race/create endpoint')
  var now = new Date().toISOString();

  var race = new Race({
    name: req.body.name,
    //date: req.body.date,
    //createdAt: now,
    //modifiedAt: now
  })

  race.save(function(err, race){

    if (err){
      console.log('Error saving new race');
      console.log(err)
      return res.send({error: 'Database error creating new race'})
    } 
    res.json(race)
  })
})


module.exports = router;
