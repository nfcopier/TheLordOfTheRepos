var express = require('express');
var router = express.Router();

var Users = require('../models/users');

router.get('/', function(req, res) {
  if(!req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }

  var userId = req.session.userId;

  // var tags = Users.find(userId, function(){});
  Users.find(userId, function(user) {
    //get all of the saved searches
    var options = {
      layout: 'userPage',
      title: 'Instacrammed',
      style: ['/css/search.css', '/css/dashboard.css'],
      message: 'Prepare to be marketed!',
      searches: user.searches
    };

    res.render('savedSearches', options)
  });
});

router.post('/add', function (req, res) {
  var added = req.body.add;
  var userId = req.session.userId;
  Users.addSearch(userId, added, function(){
    res.redirect('/savedResults/' + added)
  });
});

router.post('/delete', function (req, res) {
  var deleted = req.body.delete;
  var userId = req.session.userId;
  Users.removeSearch(userId, deleted, function(){
    res.redirect('/savedSearches')
  });
});

module.exports = router;
