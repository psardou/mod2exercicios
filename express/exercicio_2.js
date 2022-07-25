const express = require('express');
let products = require('./products-data');

const app = express();

app.use(express.json());

// Atividade 1
app.post('/products', (req, res) => {
    let content = req.body;

    products = [...products, ...content];

    res.status(201).json(products);
});

// Atividade 2
app.put('/products/:id', (req, res) => {
    let productIdx = products.findIndex((product) => product.id == req.params.id);
    let newContent = req.body;

    if (productIdx === -1) return res.status(404).json({"codigoErro": 404, "mensagem": "Não encontrado"});

    products[productIdx] = newContent;

    res.status(200).json(products[productIdx]);
});

// Atividade 3
app.delete('/products/:id', (req, res) => {
    let productIdx = products.findIndex((product) => product.id === Number(req.params.id));

    if (productIdx === -1) return res.status(404).json({"codigoErro": 404, "mensagem": "Não encontrado"});

    products = products.filter((product) => product.id !== Number(req.params.id));

    res.status(200).end();
});

// Atividade 4
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

app.listen(3003, () => {
    console.log("Servidor em execução");
});
