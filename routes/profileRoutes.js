var express = require('express');
var router = express.Router();
var Users = require('../models/users');

router.get('/', function(req, res) {

  if(!req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }

  var userId = req.session.userId;
  Users.find(userId, function(user){ respond(res, user, false) });

});

router.post("/", function(req, res){

  Users.update(req.body, function(){ respond(res, req.body, true) });

});

var respond = function (res, user, success) {
  res.render('profile', {
    layout: 'userPage',
    title: 'Profile',
    style: ['/css/profile.css'],
    user: user,
    showSuccess: success
  });
};

module.exports = router;
