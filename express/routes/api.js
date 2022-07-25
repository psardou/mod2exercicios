const express = require("express");

const routes = express();

const productRoutes = require("./products");

routes.use("/products", productRoutes);

module.exports = routes;