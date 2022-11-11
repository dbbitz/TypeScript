"use strict";
const users = [
    {
        id: 1,
        email: 'daniel.dr206@gmail.com',
        name: 'Daniel'
    }
];
function createUser(body) {
    users.push(body);
    return `${body}`;
}
function loginUser(body) {
    for (let i in users) {
        if (users[i].email == body.email && users[i].name == body.name && users[i].id == body.id) {
            return `${body.name} foi logado`;
        }
    }
    return `Usuário ${body.name} não existe`;
}
function updateUser(body) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == body.id) {
            users[i].name = body.name;
            users[i].email = body.email;
            return `Usuário atualizado`;
        }
    }
    return `Usuário Inexistente`;
}
function getUsers() {
    let resp = '';
    for (let i in users) {
        resp += users[i];
        console.log(users[i]);
    }
    return resp;
}
module.exports = { createUser, loginUser, updateUser, users };
