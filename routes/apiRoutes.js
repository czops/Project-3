var db = require("../models");

module.exports = function (app) {

    //==================================================================================
    //===                             GET ROUTES                                     ===                   
    //==================================================================================
    app.get("/api/allPanels", (req, res) => { //get all panels
        db.Panel.findAll({
        }).then(
            (data) => {
                res.json(data)
            })
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

    app.put("/api/processOne/", (req, res) => { //update shopOrder with Process 1 measurements
        console.log(req)
        db.Panel.update({
            process1M1: parseFloat(req.body.process1M1),
            process1M2: parseFloat(req.body.process1M2),
            process1Zone: req.body.process1Zone
        }, {
                where: {
                    shopOrder: req.body.shopOrder
                }
            }).then((data) => {
                res.json(data)
            });
    });

    app.put("/api/processTwo", (req, res) => { //update shopOrder with Process 2 measurements
        console.log(req.body);
        db.Panel.update({
            process2M1: req.body.process2M1,
            process2M2: req.body.process2M2,
            process2Zone: req.body.process2Zone
        }, {
                where: {
                    shopOrder: req.body.shopOrder
                }
            }).then((data) => {
                res.json(data)
            })
    });



} // module export close