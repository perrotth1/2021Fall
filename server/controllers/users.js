
const express = require("express");
const model = require("../models/users");

const app = express.Router();       //a "sub pipeline"

app
    .get("/", (req, res, next) => {
        res.send(model.GetAll());
    })
    .get(":user_id", (req, res, next) => {
        res.send(model.Get(req.params.user_id));
    })


//commonjs way of exporting the object
module.exports = app;