module.exports = function(router) {
    // This route renderes the homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    // This route renderes the saved handlebar's page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}

