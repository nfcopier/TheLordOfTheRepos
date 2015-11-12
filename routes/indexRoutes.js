var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('index', {
    layout: 'basicPage',
    title: 'Instacrammed',
    style: '/css/index.css',
    message: 'Prepare to be marketed!'
  })
})

module.exports = router
