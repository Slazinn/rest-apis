const express = require('express')
const app = express()

const port = process.envPORT || 3000;

app.get("/", function (req, res) {
    res.send("Ola usuário"); 
})

app.listen(port, ( ) => {
    console.info(`Aplicaçao rodando em http://localhost:${port}`);
});