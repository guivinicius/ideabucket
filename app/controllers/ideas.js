'use strict';

var mongoose = require('mongoose'),
    Idea     = mongoose.model('Idea');

exports.index = function(req, res) {

  Idea.find(function(err, ideas) {
    if (err) { return console.error(err); }

    res.json(ideas);
  });

};

exports.show = function(req, res) {
  var ideaId = req.params.id;

  Idea.findById(ideaId, function(err, idea){
    if (err) { return console.error(err); }

    res.json(idea);
  });
};

exports.create = function(req, res) {
  var ideaBody = req.body.body;

  Idea.create({body: ideaBody}, function(err, idea){
    if (err) { return console.error(err); }
    res.json(idea);
  });

};

exports.update = function(req, res) {
  var ideaId = req.params.id;

  Idea.findById(ideaId, function(err, idea){
    if (err) { return console.error(err); }

    idea.likes_count = idea.likes_count++;

    idea.save(function(err, idea){
      if (err) { return console.error(err); }

      res.json(idea);
    });

  });
};

exports.delete = function(req, res) {
  var ideaId = req.params.id;

  Idea.findById(ideaId, function(err, idea){
    if (err) { return console.error(err); }

    idea.remove(function(err, idea){
      if (err) { return console.error(err); }

      res.json(idea);
    });

  });

};
