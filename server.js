require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

var db = require("./models")

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app)

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;