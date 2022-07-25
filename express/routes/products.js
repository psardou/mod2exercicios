const express = require("express");

const routes = express.Router();

let products = require("../productsData");

// Atividade 1
routes.get('/', (req, res) => {
    return res.status(200).json(products);
});

// Atividade 2
routes.get('/:id', (req, res) => {
    const id = req.params.id;

    const product = products.find((product) => {
        return product.id == id;
    });

    if (product) {
        return res.status(200).json(product);
    }

    return res.status(404).json({"code": 404, "message": "not found"})
});

const validatePrice = (req, res, next) => {
    const { price } = req.body;
    
    if (price) {
        return next();
    }
    
    return res.status(400).send("Product without price");
};

// Atividade 3
routes.post('/', validatePrice, (req, res) => {
    let content = req.body;
    
    products = [...products, content];
    
    return res.status(201).json(content);
});

// Atividade 4
routes.put('/:id', (req, res) => {
    let productIdx = products.findIndex((product) => product.id == req.params.id);
    let newContent = req.body;

    if (productIdx === -1) return res.status(404).json({"code": 404, "message": "not found"});

    products[productIdx] = newContent;

    return res.status(200).json(products[productIdx]);
});

// Atividade 5
routes.delete('/:id', (req, res) => {
    let productIdx = products.findIndex((product) => product.id === Number(req.params.id));

    if (productIdx === -1) return res.status(404).json({"code": 404, "message": "not found"});

    products = products.filter((product) => product.id !== Number(req.params.id));

    return res.status(204).end();
});

module.exports = routes;