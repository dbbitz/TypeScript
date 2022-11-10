const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req,res) => {
    res.send("API")
})


app.listen(8080, () => console.log("Servidor está rodando na porta 8080"))