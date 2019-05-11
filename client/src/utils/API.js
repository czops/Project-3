import axios from "axios";

export default {
    //===============================
    //==      GET ROUTES           ==
    //===============================

    // Gets all panels from DB
    getAllPanels: function () {
        return axios.get("/api/allPanels");
    },

    getOnePanel: function (shopOrder) {
        return axios.get("/api/getOne", shopOrder);
    },

    //===============================
    //==      POST ROUTES          ==
    //===============================

    // Create a new panel. panelInfo will have to include:
    // shopOrder / modelNum / panelSizeX / panelSizeY
    saveNewPanel: function (panelInfo) {
        return axios.post("/api/newPanel/", panelInfo);
    },

    // Create a new puck, returns puckNum expects:
    // shopOrder to ensure association
    newPuck: function (shopOrder) {
        return axios.post("/api/newPuck/", shopOrder);
    },



    //===============================
    //==      PUT ROUTES           ==
    //===============================

    //Update measurements as a part of process one. Expects:
    //process1M1 / process1M2 / process1Zone / process1PuckNum / shopOrder
    processOne: function (processOne) {
        return axios.put("/api/processOne", processOne);
    },

    //Update measurements as a part of process one. Expects:
    //process2M1 / process2M2 / process2Zone / process1PuckNum / shopOrder
    processTwo: function (processTwo) {
        return axios.put("/api/processOne", processTwo);
    },

};
