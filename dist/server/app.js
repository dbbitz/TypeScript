"use strict";
const express = require('express');
const app = express();
const path = require('path');
const user = require('./services/user');
app.use(express.json());
app.get('/', (req, res) => {
    res.send(user.users);
});
app.post('/accounts/', (req, res) => {
    user.createUser(req.body, res);
    res.send(user.users);
});
app.post('/accounts/login', (req, res) => {
    const resp = user.loginUser(req.body);
    res.send(resp);
});
app.patch('/accounts/', (req, res) => {
    const resp = user.updateUser(req.body);
    res.send(resp);
});
app.listen(8080, () => console.log("Servidor está rodando na porta 8080"));
