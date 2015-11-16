var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  if(!req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }

  res.render('savedResults', {
    layout: 'basicPage',
    title: 'Saved Results',
    style: ['/css/search.css'],
    message: 'Prepare to be marketed!'
    // TODO: add partial info
  })
});

module.exports = router;
