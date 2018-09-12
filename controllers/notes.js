// Controller for Notes
// ============================

// Bring in scrape script & makeDate script
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");

// Bring in Headline & Note mongoose models
var Headline = require("../models/Headline");
var Note = require("../models/Note")

module.exports = {
  delete: function(query, cb) {
    Note.remove(query, cb);
  },
  get: function(query, cb) {
    
    Note.find({headlineId: query._id})

      // Execute query
      .exec(function(err, doc) {
       
        cb(err, doc);
       
      });
     
  },
  save: function(query, cb) {

    Note.collection.save({headlineId: query._id, date: makeDate(), noteText: query.noteText}, function(err, docs) {
        cb(err, docs);
    });
  }
};
