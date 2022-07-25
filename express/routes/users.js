const express = require("express");

const routes = express.Router();

let users = [];

const nextUserId = () => {
    return users.length + 1;
};

const verifyUserParams = (req, res, next) => {
    const { username, email, password } = req.body;

    if (username && email && password) return next();

    return res.status(400).json({"code": 400, "message": "bad request - try to verify params"});
};

routes.post("/", verifyUserParams, (req, res) => {
    let user = {id: nextUserId(), ...req.body};

    users.push(user);

    return res.status(201).json(user);
});

const verifyValidId = (req, res, next) => {
    const id = users.findIndex((user) => user.id == req.params.id);

    if (id !== -1) return next();

    return res.status(404).json({"code": 404, "message": "not found"});
};

routes.put("/:id", verifyValidId, (req, res) => {
    const newContent = res.body;
    const userIndex = users.findIndex((user) => user.id == req.params.id);

    if (userIndex !== -1) {
        users[userIndex] = newContent;
        return res.status(200).json(users[userIndex]);
    }

});

routes.delete("/:id", verifyValidId, (req, res) => {
    const delUser = users.find((user) => user.id == req.params.id);

    if (delUser) {
        users = users.filter((user) => user.id !== delUser.id);
        return res.status(200).end();
    }

});

routes.patch("/:id", verifyValidId, (req, res) => {
    const { password } = req.body;
    const userIndex = users.findIndex((user) => user.id == req.params.id);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], password };
        return res.status(200).json(users[userIndex]);
    }
});

module.exports = routes;