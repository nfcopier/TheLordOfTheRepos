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


app.use('/', indexRoutes)
app.use('/user', userRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/search', searchRoutes)
app.use('/profile', profileRoutes)



app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)

console.log('Server running at http:127.0.0.1:' + port + '/')
