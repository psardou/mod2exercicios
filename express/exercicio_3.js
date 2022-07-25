const express = require("express");

const app = express();

const apiRoutes = require("./routes/api");

app.use(express.json());

app.use("/api", apiRoutes);

app.use((req, res, next) => {
    res.status(404).send("Error 404 - Not Found!")
    next()
})

app.listen(3003, () => {
    console.log("Servidor em execução");
});