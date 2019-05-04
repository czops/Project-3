var db = require("../models");

module.exports = function (app) {

    //GET ROUTES

    // Get all Users
    app.get("/api/Users", function (req, res) {
        db.User.findAll({ include: [db.Goal, db.Message] }).then(function (dbUsers) {
            res.json(dbUsers);

        });
    });



} // module export close