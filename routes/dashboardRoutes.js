var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
  var options = {
    url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + req.session.access_token
  };
  request.get(options ,function(error, response, body) {
    var bodyJson = JSON.parse(body);
    if((bodyJson.meta.code / 100) === 4) {
      req.session.isLoggedIn = false;
      res.redirect("/");
      return;
    }

    //console.log(posts);
    posts_data = bodyJson.data;
    var fixed_posts = [];

    var counter = 0;
    for(var i = 0; i < posts_data.length; i+=3){
       fixed_posts[counter] = posts_data.splice(i, 3);
       counter += 1;
    }


    var options = {
      pictures: bodyJson.data,
      pictures_n: fixed_posts,
      layout: 'userPage',
      title: 'Instacrammed',
      style: ['/css/dashboard.css']
    };
    res.render('dashboard', options);
  });
});

module.exports = router
