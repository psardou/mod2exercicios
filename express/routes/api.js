const express = require("express");

const routes = express();

const productRoutes = require("./products");

const userRoutes = require("./users");

routes.use("/products", productRoutes);

routes.use("/users", userRoutes);

module.exports = routes;