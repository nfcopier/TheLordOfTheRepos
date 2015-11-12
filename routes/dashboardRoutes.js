var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  // var obj = {}
	// obj.style = '/css/dashboard.css',
	// obj.layout = 'userPage',
  // obj.title = 'User Dashboard!',
  // obj.welcome = 'Welcome to your dashboard!',
	//obj.feed = feed,


  res.render('dashboard', obj)

  res.render('dashboard', {
    layout: 'basicPage',
    title: 'Instacrammed',
    style: '/css/dashboard.css',
    message: 'Prepare to be marketed!'
  })
})

module.exports = router
