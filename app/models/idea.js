'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var IdeaSchema = new Schema({
  body: String,
  likes_count: Number
});

/**
 * Validations
 */
IdeaSchema.path('body').validate(function (string) {
  return string.length >= 1 && string.length <= 100;
}, 'Body must be between 1 and 100');

module.exports = mongoose.model('Idea', IdeaSchema);
