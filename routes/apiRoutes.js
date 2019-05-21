var db = require("../models");

const TokenGenerator = require('token-generator')({
    salt: "sk2gV!ItMVuZf6TP2uR!XzrLJcrQPF86M!2vLs62",
    timestampMap: '6ui7Q$@prE', // 10 chars array for obfuscation proposes
});

module.exports = function (app) {


    //==================================================================================
    //===                             GET ROUTES                                     ===                   
    //==================================================================================


    app.get("/api/allPanels", (req, res) => { //get all panels
        if (TokenGenerator.isValid(req.body.token)) {
            db.Panel.findAll({
            }).then(
                (data) => {
                    res.json(data)
                })
        }
        else {
            res.json({ userName: undefined })
        }

    })

    app.get("/api/getOne", (req, res) => { //get one Panel by shopOrder Number
        if (TokenGenerator.isValid(req.body.token)) {
            db.Panel.findOne({
                where: {
                    shopOrder: req.body.shopOrder
                }
            }).then(
                (data) => {
                    res.json(data)
                })
        }
        else {
            res.json({ message: "please log in" })
        }
    })


    //==================================================================================
    //===                             POST ROUTES                                    ===                   
    //==================================================================================

    app.post("/api/newPanel", (req, res) => { //create a new panel with the shop order and model number information
        db.Panel.create({
            shopOrder: req.body.shopOrder,
            modelNum: req.body.modelNum,
            panelSizeX: req.body.panelSizeX,
            panelSizeY: req.body.panelSizeY
        }).then((data) => {
            res.json(data)
        })
    })

    app.post("/api/multiplePanels", (req, res) => { //req.body has to be an array
        db.Panel.bulkCreate(
            req.body
        ).then((data) => {
            console.log(data)
            res.json(data)
        })
    })

    app.post("/api/newPuck", (req, res) => { //create a new puck and add shopOrder association
        db.Puck.create({
            shopOrder: req.body.shopOrder
        }).then((data) => {
            res.json(data.puckNum) //return the new puck number
        })
    })

    //==================================================================================
    //===                             PUT ROUTES                                     ===                   
    //==================================================================================

    app.put("/api/processOne", (req, res) => { //update shopOrder with Process 1 measurements
        // console.log(req.body);
        db.Panel.findOne({
            where: {
                shopOrder: req.body.shopOrder
            }
        }).then((panel) => {
            console.log(panel);
            if (panel) {
                db.Panel.update({
                    process1M1: req.body.process1M1,
                    process1M2: req.body.process1M2,
                    process1Zone: req.body.process1Zone,
                    process1PuckNum: req.body.process1PuckNum
                }, {
                        where: {
                            shopOrder: req.body.shopOrder
                        }
                    }).then((data) => {
                        console.log("-----------------------------------------------------------------------------------")
                        console.log(data)
                        let msg = (data) ? `Shop Order successfully updated ${req.body.shopOrder}` : "Unable to update"
                        res.json(msg)
                    })
            }
            else {
                res.json(`Panel not found`)
            }

        })
    })

    app.put("/api/processTwo", (req, res) => { //update shopOrder with Process 2 measurements
        console.log(req.body);
        db.Panel.findOne({
            where: {
                shopOrder: req.body.shopOrder
            }
        }).then((res) => {
            console.log(res);
            db.Panel.update({
                process2M1: req.body.process2M1,
                process2M2: req.body.process2M2,
                process2Zone: req.body.process2Zone,
                process2PuckNum: req.body.process2PuckNum
            }, {
                    where: {
                        shopOrder: req.body.shopOrder
                    }
                }).then((data) => {
                    res.json(data)
                })
        })

    });

}    // module export close