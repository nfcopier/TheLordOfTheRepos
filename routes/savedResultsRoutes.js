var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('savedResults', {
    layout: 'basicPage',
    title: 'Saved Results',
    style: '/css/search.css',
    message: 'Prepare to be marketed!'
    //add partial info
  })
})

module.exports = router
