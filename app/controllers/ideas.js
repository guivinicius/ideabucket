'use strict';

exports.index = function(req, res) {
  var ideas = [];

  res.json({ideas: ideas});
};

exports.show = function(req, res) {
  var idea = {};

  res.json(idea);
};

exports.create = function(req, res) {
  res.send(200);
};

exports.update = function(req, res) {
  res.send(200);
};

exports.delete = function(req, res) {
  res.send(200);
};
