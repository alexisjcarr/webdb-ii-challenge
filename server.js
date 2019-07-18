const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const carsRouter = require("./routers/carsRouter");

const server = express();

server.use(bodyParser.json());
server.use(cors());

// routers
server.use("/api/cars", carsRouter);

module.exports = server;
