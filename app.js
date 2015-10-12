var express 	= require('express')
	, path = require('path')
	, exphbs		= require('express-handlebars')
  , port      = 3000
	, marketingRoutes = require('./routes/marketingRoutes')
	, userRoutes = require('./routes/userRoutes');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'userPage'}));
app.set('view engine', 'handlebars');

app.use('/', marketingRoutes)
app.use('/user', userRoutes)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)

console.log('Server running at http:127.0.0.1:' + port + '/')
