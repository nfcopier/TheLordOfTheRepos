var express		= require('express');
var path			= require('path');
var exphbs		= require('express-handlebars');
var bodyParser 	= require('body-parser');
var session		= require('express-session');
var routes		= require('./routes/routesConfig');
var port			= 3000;

var db = require('./db');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'userPage'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  resave: false,
  saveUninitialized: true
}));


app.use('/', routes.Index);
app.use('/dashboard', routes.Dashboard);
app.use('/search', routes.SearchRoutes);
app.use('/profile', routes.ProfileRoutes);



app.use(express.static(path.join(__dirname, 'public')));

db.connect('mongodb://BillyBob:password@ds039684.mongolab.com:39684/testing', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  }
  else {
    app.listen(port, function() {
      console.log('Server running at http:127.0.0.1:' + port + '/');
    });
  }
});
