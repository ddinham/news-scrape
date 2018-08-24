var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


var PORT = process.env.PORT || 3000;

var app = express();

var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;

mongoose.connect(db, function(error){
  if(error) {
    console.log(error);
  }
  else {
    console.log("mongoose connection is successful")
  }
});



app.use(router);

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
