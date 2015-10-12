var express = require('express');
var router = express.Router();

router.get('/dashboard', function(req, res) {
  res.render('dashboard', {
		layout: 'userPage',
    title: 'User Dashboard!',
    message: 'Welcome to your dashboard!'
  })
})

router.get('/profile', function(req, res) {
  res.render('profile', {
		layout: 'userPage',
    title: 'User Profile!',
    message: 'Welcome to your dashboard!'
  })
})


module.exports = router
