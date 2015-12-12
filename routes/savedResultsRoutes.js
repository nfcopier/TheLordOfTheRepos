var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:result', function(req, res) {

  if(!req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }
// console.log(req.params.result);



var query = req.params.result;



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

  posts_data = bodyJson.data;

  var fixed_posts = [];
  var counter = 0;
  for(var i = 0; i < posts_data.length; i+=3){
     fixed_posts[counter] = posts_data.splice(i, 3);
     counter += 1;
  }




    res.render('savedResults', {
      layout: 'userPage',
      title: 'Saved Results for #'+ query,
      style: ['/css/search.css', '/css/dashboard.css'],
      message: 'Prepare to be marketed!',
      pictures_n: fixed_posts,
      pictures: bodyJson.data
    })
  });

});

module.exports = router;
