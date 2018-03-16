var express = require('express');
var app = express();

var ParserController = require('./ParserController');
app.use('/parse', ParserController);

module.exports = app;