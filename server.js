// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('HW5', ['HW5']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/HW5', function (req, res) {
  console.log('I received a GET request');

  db.HW5.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.post('/HW5', function (req, res) {
  console.log(req.body);
  db.HW5.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/HW5/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.HW5.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});


app.get('/HW5/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.HW5.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/HW5/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.id);
  db.HW5.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {title: req.body.title, text: req.body.text, due: req.body.due, statusProperty: req.body.statusProperty}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


app.listen(8080);
console.log("Server running on port 8080");
