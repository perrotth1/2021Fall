
const express = require("express");
const model = require("../models/posts");

const app = express.Router();       //a "sub pipeline"

app
    .get("/", (req, res, next) => {
        res.send(model.GetAll());
    })
    .get("/search", (req, res, next) => {
        res.send(model.Search(req.query.q));
    })
    .get(":id", (req, res, next) => {
        res.send(model.Get(req.params.id));
    })
    


//commonjs way of exporting the object
module.exports = app;