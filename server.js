var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var url = 'mongodb://localhost/czechitas';

// var mongo = require('mongodb').MongoClient;
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;

// mongo.connect(url, function(err, db) {
//   assert.equal(null, err);
//
//   process.on('exit', function () {
//     db.close();
//   });
//
//   var cursor = db.collection('todos').find();
//   cursor.toArray(function(err, docs) {
//     console.log(docs);
//   });
// });

mongoose.connect(url);

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
