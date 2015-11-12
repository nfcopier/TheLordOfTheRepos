var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
  var options = {
    url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + req.session.access_token
  };
  request.get(options ,function(error, response, body) {
    var posts = JSON.parse(body);
    var options = {
      pictures: posts.data,
      layout: 'userPage',
      title: 'Instacrammed',
      style: '/css/dashboard.css'
    };
    res.render('dashboard', options);
  });
});

module.exports = router
