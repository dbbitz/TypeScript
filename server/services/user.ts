interface UserData{
    id: Number,
    email: String,
    name: String
}
const users:any = [
    {
        id: 1,
        email: 'daniel.dr206@gmail.com',
        name: 'Daniel'
    }
]

function createUser(body: UserData):any {
    users.push(body)
    return `${body}`
}

function loginUser(body: any):String {
    for(let i in users){
        if(users[i].email == body.email && users[i].name == body.name && users[i].id == body.id ){
            return `${body.name} foi logado`
        }
    }
    return `Usuário ${body.name} não existe`
}

function updateUser(body: UserData):String {
    for(let i:number = 0; i<users.length; i++){
        if(users[i].id == body.id){
            users[i].name = body.name
            users[i].email = body.email
            return `Usuário atualizado`
        }
    }
    
    return `Usuário Inexistente`
    
}

function getUsers():String{
    let resp:String = ''
    for(let i in users){
        resp += users[i]
        console.log(users[i])
    }
    return resp 
}
module.exports = {createUser, loginUser, updateUser, users}
