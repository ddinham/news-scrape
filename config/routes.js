var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router) {
  // This route renders the homepage
  router.get("/", function(req, res) {
    res.render("home");
  });

  // This route renders the saved handledbars page
  router.get("/saved", function(req, res) {
    res.render("saved");
  });

  // This route handles scraping more articles to add to DB
  router.get("/api/fetch", function(req, res) {
    headlinesController.fetch(function(err, docs) {
      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }
      else {
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

  router.get("/api/headlines", function(req, res) {
    headlinesController.get(req.query, function(data) {
      res.json(data);
    });
  });

  router.delete("/api/headlines/:id", function(req, res) {
    var query = { _id: req.params.id };
    headlinesController.delete(query, function(err, data) {
      res.json(data);
    });
  });

  // This route handles updating a headline, in particular saving one
  router.put("/api/headlines", function(req, res) {
    headlinesController.update(req.body, function(err, data) {
      res.json(data);
    });
  });

  // This route handles getting notes for a particular headline id
  router.get("/api/notes/", function(req, res) {
    notesController.get({}, function(err, data) {
      res.json(data);
    });
  });

  router.get("/api/notes/:headline_id", function(req, res) {
    var query = { _id: req.params.headline_id };
    notesController.get(query, function(err, data) {
      res.json(data);
    });
  });

  // This route handles deleting a note of a particular note id
  router.delete("/api/notes/:id", function(req, res) {
    var query = { _id: req.params.id };
    notesController.delete(query, function(err, data) {
      res.json(data);
    });
  });

  // This route handles saving a new note
  router.post("/api/notes", function(req, res) {
    notesController.save(req.body, function(data) {
      res.json(data);
    });
  });
};