const express = require("express");
const bodyParser = require("body-parser");

const carsRouter = require("./routers/carsRouter");

const server = express();

server.use(bodyParser.json());

// routers
server.use("/api/cars", carsRouter);

module.exports = server;
