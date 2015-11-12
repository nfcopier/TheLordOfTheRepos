var express 	= require('express')
	, path = require('path')
	, exphbs		= require('express-handlebars')
  , port      = 3000
	, marketingRoutes = require('./routes/marketingRoutes')
	, indexRoutes = require('./routes/indexRoutes')

	, dashboardRoutes = require('./routes/dashboardRoutes')
	, savedResultsRoutes = require('./routes/savedResultsRoutes')
	, savedSearchesRoutes = require('./routes/savedSearchesRoutes')
	, profileRoutes = require('./routes/profileRoutes')
	, searchRoutes = require('./routes/searchRoutes')
	//add more routes for the different pages to avoid cluttering up this page
	, userRoutes = require('./routes/userRoutes');
var request = require('request');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var session = require('express-session');
var cfg = require('./config');

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

// app.use('/', )
app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/search', searchRoutes)
app.use('/profile', profileRoutes)


// app.get('/dashboard', function(req, res) {
// 	//var feed = require('./feed.json')
//
//
// 	var obj = {}
// 	obj.style = '/css/dashboard.css',
// 	obj.layout = 'userPage',
//   obj.title = 'User Dashboard!',
//   obj.welcome = 'Welcome to your dashboard!',
// 	//obj.feed = feed,
//
//
//   res.render('dashboard', obj)
// })

// app.get('/profile', function(req, res) {
// 	//var feed = require('./feed.json')
// 	//var stippets = require('./stippets.json')
//
// 	var obj = {}
// 	obj.style = '/css/profile.css',
// 	obj.layout = 'userPage',
//   obj.title = 'User Profile!',
//   obj.welcome = 'Welcome to your dashboard!',
// 	obj.profile = '',
// 	//obj.feed = feed,
// 	//obj.user = stippets
//
//   res.render('profile', obj)
// })
//
// app.get('/savedSearches', function(req, res) {
//
// 	var obj = {}
// 	obj.style = '/css/search.css',
// 	obj.layout = 'userPage',
//   obj.title = 'User Profile!',
//   obj.welcome = 'Welcome to your dashboard!',
//
// 	res.render('savedSearches', obj)
// })
//
// app.get('/savedResults', function(req, res) {
// 	var results = ""
//
// 	var obj = {}
// 	obj.style = '/css/search.css',
// 	obj.layout = 'userPage',
//   obj.title = 'Results',
//
//
//
// 	res.render('savedResults', obj)
// })
//
// app.get('/search', function(req, res) {
//
// 	var obj = {}
// 	obj.style = '/css/search.css',
// 	obj.layout = 'userPage',
//   obj.title = 'User Profile!',
//   obj.welcome = 'Welcome to your dashboard!',
//
// 	res.render('search', obj)
// })
//


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)

console.log('Server running at http:127.0.0.1:' + port + '/')
