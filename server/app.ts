
const express = require('express')
const app = express()
const path = require('path')
const user = require('./services/user')

app.use(express.json())

app.get('/', (req:any, res:any) => {
    res.send(user.users);
});
app.post('/accounts/', (req:any, res:any) => {
    user.createUser(req.body, res);
    res.send(user.users);
});
app.post('/accounts/login', (req:any, res:any) => {
    const resp = user.loginUser(req.body)
    res.send(resp);
});
app.patch('/accounts/', (req:any, res:any) => {
    const resp = user.updateUser(req.body);
    res.send(resp)
    
});

app.listen(8080, () => console.log("Servidor está rodando na porta 8080"))