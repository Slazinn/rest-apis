const express = require('express')
const app = express()
const axios = require('axios')
const fs = require('fs')
const router = require('./config/consultas.js')
const routes = require('./config/routes.js')
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("Ola usuário"); 
})

app.listen(port, ( ) => {
    console.info(`Aplicaçao rodando em http://localhost:${port}`);
});
