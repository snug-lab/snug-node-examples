'use strict';

// setup
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const compression = require('compression');
const helmet = require('helmet');

// Load environment variables from .env file
dotenv.load();

// Database connection
app.set('bookshelf', require('./config/bookshelf'));

// Secure express
app.use(helmet());

// Prettify HTML
app.locals.pretty = true;

// Should be placed before express.static
// To ensure that all assets and data are compressed (utilize bandwidth)
app.use(compression({
    // Levels are specified in a range of 0 to 9, where-as 0 is
    // no compression and 9 is best compression, but slowest
    level: 9
}));

// set the static files location
app.use(express.static(__dirname + '/public'));

//log every request to the console
app.use(morgan('dev'));

// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use(methodOverride('_method'));

// routes
app.use(require('./routes'));

// application
app.get('*', function(req, res) {
    // load the single view file (angular will handle the page changes on the front-end)
    res.sendFile('~/public/index.html');
});

// listen (start app with node server.js)
app.listen(3000);
console.log("App listening on port 3000");
