var express 	= require('express')
	, path = require('path')
	, exphbs		= require('express-handlebars')
  , port      = 3000
	, marketingRoutes = require('./routes/marketingRoutes')
	, indexRoutes = require('./routes/indexRoutes')

	, dashboardRoutes = require('./routes/indexRoutes')
	, savedResultsRoutes = require('./routes/indexRoutes')
	, savedSearchesRoutes = require('./routes/indexRoutes')
	, savedRoutes = require('./routes/indexRoutes')
	, profileRoutes = require('./routes/profileRoutes')
	, searchRoutes = require('./routes/searchRoutes')
	//add more routes for the different pages to avoid cluttering up this page
	, userRoutes = require('./routes/userRoutes');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'userPage'}));
app.set('view engine', 'handlebars');

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
