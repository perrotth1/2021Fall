
const express = require("express");
const model = require("../models/users");

const app = express.Router();       //a "sub pipeline"

app
    .get("/", (req, res, next) => {
        res.send(model.GetAll());
    })


//commonjs way of exporting the object
module.exports = app;