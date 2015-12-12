var express = require('express');
var router = express.Router();
var request = require('request');

var Users = require('../models/users');

/*----------------------------------GET-----------------*/
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
      searches: user.searches,
    }

    res.render('savedSearches', options)
  });
});

/*----------------------------------POST-----------------*/
router.post('/', function (req, res) {
  var deleted = req.body.delete;
  console.log("\ndelete: " + deleted + "\n");
  var userId = req.session.userId;
  Users.removeSearch(userId, deleted, function(){});
  res.redirect('/savedSearches')
});

module.exports = router;
