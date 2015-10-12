var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('index', {
    layout: 'basicPage',
    title: 'This is the marketing page!',
    message: 'Prepare to be marketed!'
  })
})

module.exports = router
