var cheerio = require("cheerio");
var request = require("request");

var scrape = function (cb) {
    request("http:/nytimes.com", function(err, res, body) {
         var $ = cheerio.load(body);

         var articles = [];

         $(".theme-summary").each(function(i, element) {
              
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();

             
      if (head && sum) {

        var headNeat = head.replace(/(?:\\[rn])+/g, "").trim();
        var sumNeat = sum.replace(/(?:\\[rn])+/g, "").trim();
        
        var dataToAdd = {
            headline: headNeat,
            summary: sumNeat
        
        articles.push(datatoAdd);
        });
        cb(articles);
      
    });
  };

  module.exports = scrape;


