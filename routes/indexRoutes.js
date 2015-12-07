var express     = require('express');
var router      = express.Router();
var cfg         = require('../config');
var bodyParser  = require('body-parser');
var querystring = require('querystring');
var request     = require('request');

var Users = require('../models/users');

router.get('/', function(req, res) {
  if(req.session.isLoggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render('index', {
    layout: 'basicPage',
    title: 'Instacrammed',
    style: ['/css/index.css'],
    message: 'Prepare to be marketed!'
  })
});

router.get('/login', function(req, res){
  var qs = {
    client_id: cfg.client_id,
    redirect_uri: cfg.redirect_uri,
    response_type: 'code'
  };
  var query = querystring.stringify(qs);
  var url = 'https://api.instagram.com/oauth/authorize/?';
  res.redirect(url + query);
});

//finalize login and redirect to dashboard
router.get('/auth/finalize', function(req, res, next) {
  if(req.query.error === "access_denied") {
    console.log("auth/finalize encountered an error");
    console.log(req.query.error);
    return res.redirect('/');
  };
  req.session.isLoggedIn = true;
  var post_data = {
    client_id: cfg.client_id,
    client_secret: cfg.client_secret,
    redirect_uri: cfg.redirect_uri,
    grant_type: 'authorization_code',
    code: req.query.code
  };
  var options = {
    url: 'https://api.instagram.com/oauth/access_token',
    form: post_data
  };
  request.post(options, function(error, response, body) {
    var data = JSON.parse(body);
    var user = data.user;

    req.session.access_token = data.access_token;
    req.session.userId = data.user.id;

    user._id = user.id;
    delete user.id;

    Users.find(user._id, function(document) {
      if (!document) {
        Users.insert(user, function (restult) {
          res.redirect('/dashboard');
        });
      }
      else {
        res.redirect('/dashboard');
      }
    });
  });
});

module.exports = router;
