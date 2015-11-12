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

module.exports = router
