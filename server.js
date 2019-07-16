const express = require("express");
const bodyParser = require("body-parser");

const db = require("./data/dbConfig");

const server = express();

server.use(bodyParser.json());

// routers

module.exports = server;
