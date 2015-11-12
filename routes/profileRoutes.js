var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('profile', {
    layout: 'basicPage',
    title: 'Profile',
    style: '/css/profile.css',
    message: 'Prepare to be marketed!'
  })
})

module.exports = router
