const express = require('express')
const app = express()
const axios = require('axios')
const fs = require('fs')
const port = process.env.PORT || 3000;

app.enable('trust proxy');
app.set("json spaces",2)

const premium = `Olá usuário! Minhas Apis estão em desenvolvimento, 
qualquer erro ou bug contate meu dono! wa.me/5511966491483

Apis disponível de consulta

TELEFONE: https://slazinnn.herokuapp.com/api/consulta/telefone/11966491483/token
NOME: https://slazinnn.herokuapp.com/api/consulta/nome/pedro/token
CNPJ: https://slazinnn.herokuapp.com/api/consulta/cnpj/59291534000167/token
CPF: https://slazinnn.herokuapp.com/api/consulta/cpf/10336009895/slazinnnn`;


app.get("/", function (req, res) {
    res.send(`${premium}`); 
})

const token = ["slazinnnn","loserzinn","texasdomina"]


app.get('/api/consulta/cnpj/:q/:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	cnpj = await axios(`https://www.receitaws.com.br/v1/cnpj/${req.params.q}`);
	res.json(cnpj.data)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})

app.get('/api/consulta/nome/:q/:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	nome = await axios.get(`https://api.i-find.dev/?token=b4ded580-a8a6-4d66-9f03-93a26426391d&nome=${req.params.q}`);
		

	/*let teks = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════\n`
for (let v of api.data) {
                teks += `NOME: ${v.Nome}\n`
                teks += `CPF: ${v.Cpf}\n`
                teks += `SEXO: ${v.Genero}\n`
                teks += `DATA DE NASCIMENTO: ${v.Nascimento}\n`
                teks += `━━━━━━━━━━━━━━━━━━\n\n`
}*/ 
	res.json({
	  'Dono': "@sla_slazinn", 
	  'result': nome.data,
	});
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre token com o Slazinn wa.me/5511966491483'
	  });
}
})

app.get('/api/consulta/cpf/:q/:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	cpf = await axios.get(`https://api.i-find.dev/?token=b4ded580-a8a6-4d66-9f03-93a26426391d&cpf=${req.params.q}`);
		

	/*let teks = `═════════════════════
🕵️  *CONSULTA REALIZADA*  🕵️
═════════════════════\n`
for (let v of api.data) {
                teks += `NOME: ${v.Nome}\n`
                teks += `CPF: ${v.Cpf}\n`
                teks += `SEXO: ${v.Genero}\n`
                teks += `DATA DE NASCIMENTO: ${v.Nascimento}\n`
                teks += `━━━━━━━━━━━━━━━━━━\n\n`
}*/ 
	res.json({
	  'Dono': "@sla_slazinn", 
	  'result': cpf.data,
	});
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre token com o Slazinn wa.me/5511966491483'
	  });
}
})

app.get('/api/consulta/telefone/:q/:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	tel = await axios.get(`https://api.i-find.dev/?token=b4ded580-a8a6-4d66-9f03-93a26426391d&telDb=${req.params.q}`);
	
	res.json({
	  'Dono': "@sla_slazinn",  
	  'result': tel.data,
	});
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre token com o Slazinn wa.me/5511966491483'
	  });
}
})
app.listen(port, ( ) => {
    console.info(`Aplicaçao rodando em http://localhost:${port}`);
});
