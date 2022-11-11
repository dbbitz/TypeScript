interface ApiResponde<T>{
    data: T,
    errors: Array<String>
}

interface UserData{
    id: Number,
    email: String,
    name: String
}

interface LoginData{
    id: any
}


