console.log('Hello from node');
// Installed middleware setup
const express     = require('express');
const app         = express();
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
mongoose.plugin(require('./server/lib/globalToJSON'));
mongoose.Promise = require('bluebird');
const { port, env, dbURI } = require('./server/config/environment');

// Custom middleware setup
const authController  = require('./server/controllers/auth');
const usersController  = require('./server/controllers/users');
const productsController  = require('./server/controllers/products');
const routes              = require('./server/config/routes');
const customResponses     = require('./server/lib/customResponses');
const errorHandler        = require('./server/lib/errorHandler');


mongoose.connect(dbURI);
// mongoose.connect('mongodb://localhost:27017/mean-demo');

// if(env !== 'test') app.use(morgan('dev'));

app.use(morgan());
app.use(bodyParser());
// app.use(bodyParser.json({limit: '5mb'})); // to limit max size of uploaded image

app.use(express.static(`${__dirname}/public`));
app.use('/bower_components', express.static(`${__dirname}/bower_components`));
app.use('/node_modules', express.static(`${__dirname}/node_modules`));
app.use('/images', express.static(`${__dirname}/client/images`));
app.use('/css', express.static(`${__dirname}/client/css`));
app.use('/js', express.static(`${__dirname}/client/js`));

app.use(customResponses);
app.use(routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/client/js/views/index.html`));
app.use(errorHandler);

app.listen(port, () => console.log(`I\'m Listening on port ${port}...`));
