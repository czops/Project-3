const db = require("../models");

const TokenGenerator = require('token-generator')({
    salt: "sk2gV!ItMVuZf6TP2uR!XzrLJcrQPF86M!2vLs62",
    timestampMap: '6ui7Q$@prE', // 10 chars array for obfuscation proposes
});

const token = TokenGenerator.generate();

module.exports = function (app) {

    // Route for login link
    app.post("/login", function (req, res) {
        db.User.findAll({
            where: { //SELECT * FROM db.User WHERE username = req.body.username AND password = req.body.password
                username: req.body.usernameData,
                password: req.body.passwordData
            },
            raw: true,
        }).then(function (userInfo) {
            if (userInfo.length === 0) {
                res.json({ userName: undefined });
            }
            else {
                console.log(userInfo[0], token);
                var loggedUser = {//Create an object of properties to return to client 
                    "userName": userInfo[0].username,
                    "token": token
                };
                res.json(loggedUser); //send array back to browser for use
            }
        });
    });

}    // module export close