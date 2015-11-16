var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {

  res.render('search', {
    layout: 'basicPage',
    title: 'Instacrammed',
    style: ['/css/search.css', '/css/dashboard.css'],
    message: 'Prepare to be marketed!'
    // add partial
  })
});

router.post('/', function(req,res) {
  var query = req.body.query;
  var options = {
    url:
    'https://api.instagram.com/v1/tags/' + query +  '/media/recent?access_token=' + req.session.access_token
  };
  request.get(options, function(error, response, body) {
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
      style: ['/css/search.css', '/css/dashboard.css']
    };
    res.render('search', options);
  });
});


module.exports = router
