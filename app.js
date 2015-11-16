var express			= require('express')
	, path			= require('path')
	, exphbs		= require('express-handlebars')
	, port			= 3000
	, bodyParser 	= require('body-parser')
	, session		= require('express-session')
	, routes		= require('./routes/routesConfig');

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

app.listen(port);

console.log('Server running at http:127.0.0.1:' + port + '/');
