const db = require("../models");

module.exports = (app) => {

    // Get all panels from database
    app.get("/api/Panels", (req, res) => {
        db.Panel.findAll()
            .then((panels_db) => {
                res.json(panels_db)
            });
    });
}