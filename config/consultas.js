const express = require('express')
const fs = require('fs')
const axios = require('axios')

const token = ["teste"]
const router = express.Router()

router.get('/api/consulta/cnpj/:q/:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	cnpj = await axios(`https://www.receitaws.com.br/v1/cnpj/${req.params.q}`);
	res.json(cnpj.data)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Markos > wa.me/5594991423691'
	  });
}
})

router.get('/api/consulta/nome/:q/:q2', async (req, res) => {
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
		error: 'infelizmente você não possui o token para realizar a consulta, compre token com wa.me/5511966491483'
	  });
}
})

router.get('/api/consulta/telefone/:q/:q2', async (req, res) => {
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
		error: 'infelizmente você não possui o token para realizar a consulta, compre token com wa.me/5511966491483'
	  });
}
})

module.exports = router      