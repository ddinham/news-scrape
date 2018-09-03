module.exports = function(router) {
    // This route renders the homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    // This route renders the saved handlebar's page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}

