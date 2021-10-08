//import { parse } from "@vanillaes/csv";

const fs = require('fs');

console.log("test");

const input = document.querySelector('input');
const results = document.getElementById('results');
const resultsWindow = document.getElementById('resultsWindow');

var text = readFileSync("../assets/shirtsMerged.csv").toString("utf-8");
var byLine = text.split("\n");
console.log(byLine[1]);