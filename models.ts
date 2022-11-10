interface ApiResponde<T>{
    data: T,
    errors: Array<String>
}

interface UserData{
    id: any,
    email: any,
    name: string
}

interface LoginData{
    id: any
}