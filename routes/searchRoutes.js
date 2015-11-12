var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('search', {
    layout: 'basicPage',
    title: 'Instacrammed',
    style: '/css/search.css',
    message: 'Prepare to be marketed!'
    // add partial
  })
})

router.post('/', function(req,res) {
  var query = req.body.query;
  var options = {
    url: 'https://api.instagram.com/v1/users' + query + '/media/recent?access_token=' + req.session.access_token //req.session.access_token
  };
  req.get(options, function(error, response, body) {
    console.log(body);
  });
});

module.exports = router
