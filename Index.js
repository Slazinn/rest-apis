const express = require('express')
const app = express()
const axios = require('axios')

const port = process.env.PORT || 3000;

app.enable('trust proxy');
app.set("json spaces",2)

const premium = `Olá usuário! Minhas Apis estão em desenvolvimento, 
qualquer erro ou bug contate meu dono! wa.me/5511966491483

Apis disponível de consulta

TELEFONE: https://slazinnn.herokuapp.com/api/consulta/telefone/11966491483/token
NOME: https://slazinnn.herokuapp.com/api/consulta/nome/pedro/token
CNPJ: https://slazinnn.herokuapp.com/api/consulta/cnpj/59291534000167/token
CPF: https://slazinnn.herokuapp.com/api/consulta/cpf/10336009895/token`;


app.get("/", function (req, res) {
    res.send(`${premium}`); 
})

const token = ["slazinnnn","loserzinn","texasdomina","Komi&san"]

/*app.get('/api/consulta/cnpj/:q/:q2', async (req, res) => {
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

 //SISTEMA PUSSY

 app.get('/api/nsfw/pussy&token=:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	const pussyy = [
{"result": "https://cdni.pornpics.com/460/7/374/69356267/69356267_042_de7e.jpg"},
{"result": "https://cdni.pornpics.com/460/7/488/96701412/96701412_009_a4f5.jpg"},
{"result": "https://cdni.pornpics.com/460/1/236/99030831/99030831_009_38ab.jpg"},
{"result": "https://cdni.pornpics.com/460/7/113/79243092/79243092_046_95bb.jpg"},
{"result": "https://cdni.pornpics.com/460/7/87/17528824/17528824_096_6ee6.jpg"},
{"result": "https://cdni.pornpics.com/460/7/522/29939810/29939810_060_dca4.jpg"},
{"result": "https://cdni.pornpics.com/460/7/98/47373423/47373423_262_33bd.jpg"},
{"result": "https://cdni.pornpics.com/460/7/378/59638192/59638192_056_5857.jpg"},
{"result": "https://cdni.pornpics.com/460/7/535/24980577/24980577_046_1b3d.jpg "},
{"result": "https://cdni.pornpics.com/460/7/378/59638192/59638192_111_fd84.jpg"},
{"result": "http://t.bestpussypictures.com/nthumbs//2016-06-29/2240103/2240103_18.jpg"},
{"result": "http://nt.bestpussypictures.com/thumbnails/2015-03-09/3810074/14_300.jpg"},
{"result": "http://nt.bestpussypictures.com/thumbnails/2018-04-01/3778840/04_300.jpg"},
{"result": "http://t.bestpussypictures.com/thumbs/2017-06-08/467571_08.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img2.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img3.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img4.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img5.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img6.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img7.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img9.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img10.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img11.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img13.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img14.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img15.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img21.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img26.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img27.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img30.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img33.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img35.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img39.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img44.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img46.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img50.jpg"},
{"result": "https://www.tatarada.com.br/wp-content/uploads/2018/01/vagina-rosada-com-labios-lindos-img52.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/Fotos-de-Bucetas-Gostosas-1-241x300.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/Fotos-de-Bucetas-Gostosas-10-200x300.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/Fotos-de-Bucetas-Gostosas-22.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-8.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-9.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-12.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-14.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-17.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-18.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-21.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-23.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-31.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-34.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-35.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-40.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-41.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-45.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-54.jpg"},
{"result": "https://www.xvideosincesto.com/wp-content/uploads/2020/04/fotos-de-bucetas-56.jpg"}
]
const puss = pussyy[Math.floor(Math.random() * pussyy.length)]
var pussy = [ { Criador: '@sla_slazinn', result: puss.result, } ]
	res.json(pussy)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})*/

app.listen(port, ( ) => {
    console.info(`Aplicaçao rodando em http://localhost:${port}`);
});
