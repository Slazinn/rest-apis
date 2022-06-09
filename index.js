const express = require('express')
const app = express()
const axios = require('axios')

const port = process.env.PORT || 3000;

app.enable('trust proxy');
app.set("json spaces",2)

const premium = `Olá usuário! Minhas Apis estão em desenvolvimento, 
qualquer erro ou bug contate meu dono! wa.me/5511966491483\n

Apis disponível de consulta

CNPJ: https://slazinnn.herokuapp.com/api/consulta/cnpj/59291534000167/token

Apis de imagem +18 disponível:\n

Pussy: https://slazinnn.herokuapp.com/api/nsfw/pussy&token=token\n
Mia Malkova: https://slazinnn.herokuapp.com/api/nsfw/miamalkova&token=token\n\n

Apis de imagem:

Metadinha: https://slazinnn.herokuapp.com/api/image/metadinha&token=token
`;


app.get("/", function (req, res) {
    res.send(`${premium}`); 
})

const token = ["slazinnnn","loserzinn","texasdomina","Komi&san"]

//SISTEMA CNPJ
app.get('/api/consulta/cnpj&text=:q&token=:q2', async (req, res) => {
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

 // SISTEMA PUSSY

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
})

// SISTEMA BELLE

  app.get('/api/nsfw/belle&token=:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	const bellee = [ 
{"result": "http://porno18.blog.br/thumbs/Belle-Delphine-Nude.jpg"},
{"result": "https://images2.imgbox.com/d9/80/e508Mq8f_o.jpg"},
{"result": "https://images2.imgbox.com/2a/00/8CXcNwAh_o.jpg"},
{"result": "https://images2.imgbox.com/9c/4f/44hvJY5t_o.jpg"},
{"result": "https://images2.imgbox.com/e3/db/LzFAfDvB_o.jpg"},
{"result": "https://images2.imgbox.com/82/57/fk1N561a_o.jpg"},
{"result": "https://images2.imgbox.com/d6/80/LKhy2kTW_o.jpg"},
{"result": "https://images2.imgbox.com/3a/a8/0MLSvqC6_o.jpg"},
{"result": "https://images2.imgbox.com/fd/67/D7c1UFBe_o.jpg"},
{"result": "https://images2.imgbox.com/12/24/GrLM2Z1O_o.jpg"},
{"result": "https://images2.imgbox.com/96/fe/bL1nBJi6_o.jpg"},
{"result": "https://images2.imgbox.com/70/63/YShom05z_o.jpg"},
{"result": "https://images2.imgbox.com/a8/b0/W7A3h4xd_o.jpg"},
{"result": "https://images2.imgbox.com/09/4a/rxZGLxRo_o.jpg"},
{"result": "https://images2.imgbox.com/be/5b/cDY2H5DW_o.jpg"},
{"result": "https://images2.imgbox.com/39/60/cbCIBOhc_o.jpg"},
{"result": "https://images2.imgbox.com/88/12/CUjZEEnb_o.jpg"},
{"result": "https://images2.imgbox.com/bc/4f/EAKeTXwp_o.jpg"},
{"result": "https://images2.imgbox.com/50/9d/SZxDqzg6_o.jpg"},
{"result": "https://images2.imgbox.com/94/db/MXqA9cVz_o.jpg"},
{"result": "https://images2.imgbox.com/1c/b3/1DlAgfQM_o.jpg"},
{"result": "https://images2.imgbox.com/2e/35/2yrSVR5b_o.jpg"},
{"result": "https://images2.imgbox.com/b7/c2/zkzGQI8p_o.jpg"},
{"result": "https://images2.imgbox.com/eb/d5/fu80gYl5_o.jpg"},
{"result": "https://images2.imgbox.com/57/e1/FRCfztV3_o.jpg"},
{"result": "https://images2.imgbox.com/01/dd/OrB9ki07_o.jpg"},
{"result": "https://images2.imgbox.com/99/a9/0LPRBqWJ_o.jpg"},
{"result": "https://images2.imgbox.com/1f/f0/h0wva5N2_o.jpg"},
{"result": "https://images2.imgbox.com/b6/80/tGXyxnTG_o.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-3225.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-6761.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-8345.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-7225.jpg"},
{"result": "https://1.bp.blogspot.com/-HXSdTycut5E/XwTXd0kGeZI/AAAAAAAAPy4/YYrvbp38hIEnVQhAYYRhcqshRWkAtTFzACLcBGAsYHQ/s1600/boabronha_91.jpg"},
{"result": "https://4.bp.blogspot.com/-32dgTHONDgw/XwTXc8oZxRI/AAAAAAAAPys/sWT3kv3PJbUQoRnrm8I9gq7FVMUw-IB7ACLcBGAsYHQ/s1600/boabronha_89.jpg"},
{"result": "https://3.bp.blogspot.com/-1TjvCku3OWc/XwTXcnNdCYI/AAAAAAAAPyo/L7QuYhKIXMc-ANSziEAH0NOry8ePFlfEQCLcBGAsYHQ/s1600/boabronha_88.jpg"},
{"result": "https://4.bp.blogspot.com/-qKrJi8wsDfU/XwTXbqcewpI/AAAAAAAAPyg/3v9IjAPUZ4E3ad6cP2YuagmskhVH-yS5QCLcBGAsYHQ/s1600/boabronha_86.jpg"},
{"result": "https://3.bp.blogspot.com/-twMO8wfaMkQ/XwTXbb00fZI/AAAAAAAAPyY/BxfXuVO5giISFMZ6l3kftIryTEwc0p33ACLcBGAsYHQ/s1600/boabronha_84.jpg"},
{"result": "https://2.bp.blogspot.com/-YmDwoNWMcz0/XwTXaTC2YUI/AAAAAAAAPyM/_bW09w_87i8rg7-LDgzcjqQEESxZUUxWgCLcBGAsYHQ/s1600/boabronha_81.jpg"},
{"result": "https://2.bp.blogspot.com/-C_79dPuWSX0/XwTXZDldrHI/AAAAAAAAPyA/SFiDYzXgjH8bnVDB7weM1PJQnjmmTqVdACLcBGAsYHQ/s1600/boabronha_79.jpg"},
{"result": "https://3.bp.blogspot.com/-PnuwHWDwbjU/XwTXYLqlM6I/AAAAAAAAPx8/lF8sgPenGw44L04u-tpTYyXys7TwF23NwCLcBGAsYHQ/s1600/boabronha_78.jpg"},
{"result": "https://2.bp.blogspot.com/-8H8zcC23Ud4/XwTXXzzncYI/AAAAAAAAPx0/8qsCbmLQAGc3z0dPS2Ia4DF3kpej9WaKACLcBGAsYHQ/s1600/boabronha_76.jpg"},
{"result": "https://4.bp.blogspot.com/-eghqx_tTzrI/XwTXWST3wVI/AAAAAAAAPxk/oN5Ecty3A_QQ6KJQEesNL7k0dqUabK_3wCLcBGAsYHQ/s1600/boabronha_72.jpg"},
{"result": "https://1.bp.blogspot.com/-TBXRQxm3gq8/XwTXX3B74yI/AAAAAAAAPx4/MLpJr_srQC8hUc9F2m_xH_nnQrHz8BROQCLcBGAsYHQ/s1600/boabronha_77.jpg"},
{"result": "https://1.bp.blogspot.com/-oarQ2qJHFH4/XwTXUdKUwAI/AAAAAAAAPxQ/IsXuAfxyctYfLDcht9y6EA-l8ZZobLSNwCLcBGAsYHQ/s1600/boabronha_68.jpg"},
{"result": "https://3.bp.blogspot.com/-OwiHxPnfxVM/XwTXUE8OJdI/AAAAAAAAPxM/4kzDo46OmVoK3IjfZiaWHGUDUKp_SmP2wCLcBGAsYHQ/s1600/boabronha_67.jpg"},
{"result": "https://1.bp.blogspot.com/-4Ev3kdV1Vos/XwTXSzDdvmI/AAAAAAAAPxE/ERFI8S7b6kEl2SVQ64og6WWHPayl4-ggACLcBGAsYHQ/s1600/boabronha_65.jpg"},
{"result": "https://1.bp.blogspot.com/-bYEOltWp-zM/XwTXSPCrBEI/AAAAAAAAPw4/TaKSHQX4uK4Wrhm_9g_g-6HqCqnVIl8kQCLcBGAsYHQ/s1600/boabronha_62.jpg"},
{"result": "https://4.bp.blogspot.com/-UMZ1SynkM_A/XwTXRk9Lz4I/AAAAAAAAPw0/FO3Kpx_5ZRg32lMVWrefv_wkt6TMS46LwCLcBGAsYHQ/s1600/boabronha_61.jpg"},
{"result": "https://2.bp.blogspot.com/-kNe6OlC7A3M/XwTXRBzCimI/AAAAAAAAPww/8Ct7APbwo5w-IYsvjFgPbAwxR2jBSm1fgCLcBGAsYHQ/s1600/boabronha_60.jpg"},
{"result": "https://2.bp.blogspot.com/-sue_8n9BbU4/XwTXQTiBXaI/AAAAAAAAPwo/F5AiQGDDHsMF_Yfq2m8B7JXerqSpRfIoQCLcBGAsYHQ/s1600/boabronha_59.jpg"},
{"result": "https://4.bp.blogspot.com/-M3yWeqUFi8U/XwTXP_px9xI/AAAAAAAAPwk/EH4VIuE3owslrc5FitwjpRVfrtHiHjefwCLcBGAsYHQ/s1600/boabronha_58.jpg"},
{"result": "https://1.bp.blogspot.com/-1b5K6r6y9QQ/XwTXP9C_ukI/AAAAAAAAPwg/MtfGkpsQvQ8Uj7PlEDjkT9eaXvJaWoYRgCLcBGAsYHQ/s1600/boabronha_57.jpg"},
{"result": "https://2.bp.blogspot.com/-eUrbXzwq_VE/XwTXPn6D0sI/AAAAAAAAPwc/BSm6VrEnSTY5kX4x48dvqNLmMjhENA_-wCLcBGAsYHQ/s1600/boabronha_56.jpg"},
{"result": "https://4.bp.blogspot.com/-0rbmUJkG_eM/XwTXO0bEJYI/AAAAAAAAPwY/clCETsvnDlAOHLYxO_SRzREXI1kZEaLDgCLcBGAsYHQ/s1600/boabronha_55.jpg"},
{"result": "https://4.bp.blogspot.com/-5hcONyn8iqg/XwTXOnFIvfI/AAAAAAAAPwU/fVueQ5ukfX813bXAQwAKFS-zqn4XsDWxACLcBGAsYHQ/s1600/boabronha_54.jpg"},
{"result": "https://3.bp.blogspot.com/-AgOLXGdPBeQ/XwTXOUFQOxI/AAAAAAAAPwQ/k2hEj_vJzYINZK8XOx5XXb44avgcaEDrACLcBGAsYHQ/s1600/boabronha_53.jpg"},
{"result": "https://3.bp.blogspot.com/-lMnrwoEWrgs/XwTXN9oAMLI/AAAAAAAAPwM/WNfCNeHA-SAcU1Jlj-V4tGWWiZ6aX1JrgCLcBGAsYHQ/s1600/boabronha_52.jpg"},
{"result": "https://3.bp.blogspot.com/-QCnx2b-q6kM/XwTXNWkvJZI/AAAAAAAAPwE/45ViWeQVGf8kCMUOikB2uxxsEGECP5WiACLcBGAsYHQ/s1600/boabronha_50.jpg"},
{"result": "https://2.bp.blogspot.com/-SQGR_CYnGJ8/XwTXNgcwx2I/AAAAAAAAPwI/UrHS_e7sR7Aov6tiTm7toY6brg7EZq9ywCLcBGAsYHQ/s1600/boabronha_51.jpg"},
{"result": "https://4.bp.blogspot.com/-33Nrl9TYHk8/XwTXMEp_zpI/AAAAAAAAPv8/MjoItQqB-TAdMX_PoNs42mB-wwouYa0XwCLcBGAsYHQ/s1600/boabronha_49.jpg"},
{"result": "https://1.bp.blogspot.com/-sMSNtjFAs3Y/XwTXLwfKHgI/AAAAAAAAPv4/Y9bPPxkWqfQ9ZvDLQk6obaTo7itEqUkGwCLcBGAsYHQ/s1600/boabronha_48.jpg"},
{"result": "https://1.bp.blogspot.com/-whNsX8fRoK4/XwTXLQmzfRI/AAAAAAAAPv0/bOgTUF2-sjkzhG4pqGfXZ_PqjgyKneMLQCLcBGAsYHQ/s1600/boabronha_47.jpg"},
{"result": "https://1.bp.blogspot.com/-H1NNmFZ-9ss/XwTXKy9S6UI/AAAAAAAAPvw/ioOCpD0Vbioq5di57B5f2USGh-G_ojlLQCLcBGAsYHQ/s1600/boabronha_46.jpg"},
{"result": "https://4.bp.blogspot.com/-FfQXONczCkg/XwTXJhuwUBI/AAAAAAAAPvk/SejFs7WDNAskdAU5BNzJCM6zOIZqD3dXACLcBGAsYHQ/s1600/boabronha_43.jpg"},
{"result": "https://3.bp.blogspot.com/-TVQ4CbOyQaE/XwTXKRtecSI/AAAAAAAAPvo/dqw0b-fQ4y0JWUBGoApyrRa-j9YIVNPggCLcBGAsYHQ/s1600/boabronha_44.jpg"},
{"result": "https://2.bp.blogspot.com/-o7BNW1tm90I/XwTXIrFDrFI/AAAAAAAAPvc/QIieZbL90SgzkFRRyyxmzU0qxx_35VxPACLcBGAsYHQ/s1600/boabronha_41.jpg"},
{"result": "https://2.bp.blogspot.com/-EvnVU2S0UOo/XwTXJDQeVkI/AAAAAAAAPvg/q-D_6GeiK7YKyp7tPna-lgAIpoEyr2prgCLcBGAsYHQ/s1600/boabronha_42.jpg"},
{"result": "https://2.bp.blogspot.com/-o7BNW1tm90I/XwTXIrFDrFI/AAAAAAAAPvc/QIieZbL90SgzkFRRyyxmzU0qxx_35VxPACLcBGAsYHQ/s1600/boabronha_41.jpg"},
{"result": "https://3.bp.blogspot.com/-t-_vIdDwa1U/XwTXIdbnrEI/AAAAAAAAPvY/_9Gw7hCzPiUQcP5U3FWauWMsGlffQgn_ACLcBGAsYHQ/s1600/boabronha_40.jpg"},
{"result": "https://1.bp.blogspot.com/-MrlGeke6bDI/XwTXHhCZ9qI/AAAAAAAAPvM/vK1HpA8kjgYOV_GU--V9kvNPJcCRWABhQCLcBGAsYHQ/s1600/boabronha_38.jpg"},
{"result": "https://2.bp.blogspot.com/-0DU1s9pOCHA/XwTXHL7Yb4I/AAAAAAAAPvE/r05n8dvDwhMGEg5XuGTyq35SbdRT-fxJQCLcBGAsYHQ/s1600/boabronha_36.jpg"},
{"result": "https://1.bp.blogspot.com/-Eco4PUlhS8M/XwTXHHb9B8I/AAAAAAAAPvI/KeVsbxcaNH4LuV1p3euIfL6V-QFK51LmwCLcBGAsYHQ/s1600/boabronha_37.jpg"},
{"result": "https://3.bp.blogspot.com/-opfGXjyNQqA/XwTXGZY94WI/AAAAAAAAPvA/J5eAr67niD8pcTmgPKKfv8ydbtEfRzwOgCLcBGAsYHQ/s1600/boabronha_35.jpg"},
{"result": "https://2.bp.blogspot.com/-JvjPY-raaiE/XwTXF6Bme8I/AAAAAAAAPu8/rD9JPlwbHvUip2VvK9VEqAnILGYWgcYtgCLcBGAsYHQ/s1600/boabronha_34.jpg"},
{"result": "https://2.bp.blogspot.com/-Vm4J8c66UeA/XwTXF4H89zI/AAAAAAAAPu4/5ZQPN7drkXUn8juke6M-HshsaeP40d2UwCLcBGAsYHQ/s1600/boabronha_33.jpg"},
{"result": "https://3.bp.blogspot.com/-gQPSTe-HiSo/XwTXFpE-tLI/AAAAAAAAPu0/PheXqT9Wuj4-BZDvTOcvZCVZCBI1ur44ACLcBGAsYHQ/s1600/boabronha_32.jpg"},
{"result": "https://2.bp.blogspot.com/-ZAWMKP_i04Q/XwTXFNcwbwI/AAAAAAAAPuw/j-1c8UVi4q0fQMdUpxikvVelfkMe4g9mwCLcBGAsYHQ/s1600/boabronha_31.jpg"},
{"result": "https://3.bp.blogspot.com/-z9VQrfyhf60/XwTXEGKC52I/AAAAAAAAPus/Npcai00X1cEU6ltTqUORuFvEmR-vQQnXACLcBGAsYHQ/s1600/boabronha_30.jpg"},
{"result": "https://1.bp.blogspot.com/-uBFGZ_X_Kb4/XwTXD2_r-iI/AAAAAAAAPuk/kEnrKBi9ceA9Sr_sHqx-hyFLJShgIaCZwCLcBGAsYHQ/s1600/boabronha_29.jpg"},
{"result": "https://1.bp.blogspot.com/-5UrXIrHUDyU/XwTXDJ7NO_I/AAAAAAAAPuc/3TUHosSACdw1r6ubV2h9lfYQKiZ_SAv1gCLcBGAsYHQ/s1600/boabronha_27.jpg"},
{"result": "https://2.bp.blogspot.com/-ZYGAi76wAoI/XwTXCbukX3I/AAAAAAAAPuU/K5Nnk7RQn_AMB5rXTVPcJJCyibBBXUZ7gCLcBGAsYHQ/s1600/boabronha_26.jpg"},
{"result": "https://3.bp.blogspot.com/-gDoWp6Yb110/XwTXCWN1ZOI/AAAAAAAAPuY/jPnJGr8f3w8RwsHIBnVtOcKUNmEnuefFQCLcBGAsYHQ/s1600/boabronha_25.jpg"},
{"result": "https://1.bp.blogspot.com/-tYnZBDnWlj4/XwTXCOZcGmI/AAAAAAAAPuQ/OAqUqGEWAZk7pXqnFB_QjOFGD6WbHHrswCLcBGAsYHQ/s1600/boabronha_24.jpg"},
{"result": "https://3.bp.blogspot.com/-2pv7GbMQuaY/XwTXBVPCI3I/AAAAAAAAPuM/UG5_CN9FYz8IBMjq8RuBqkkruswdKTl0gCLcBGAsYHQ/s1600/boabronha_23.jpg"},
{"result": "https://1.bp.blogspot.com/-1IAGzL8_U1E/XwTXA0AmZbI/AAAAAAAAPuI/R4jabinHK4AyRAVCTy7M2mNR5BB7u1R5QCLcBGAsYHQ/s1600/boabronha_22.jpg"},
{"result": "https://1.bp.blogspot.com/-1l70dt7bCGI/XwTXAyfkQgI/AAAAAAAAPuE/U_NcOKNR7hcSovRZaq0R3JpDA-hCD68ZQCLcBGAsYHQ/s1600/boabronha_21.jpg"},
{"result": "https://1.bp.blogspot.com/-eLAHk-Oc8wg/XwTW_zz7BJI/AAAAAAAAPuA/TIOEh_SRluckmk1P-65hBHp1bzIKpCFUACLcBGAsYHQ/s1600/boabronha_20.jpg"},
{"result": "https://4.bp.blogspot.com/-kl-x-3op8u0/XwTW_wiFncI/AAAAAAAAPt8/0XwLHHRC88cLcJmghD3_RUtbFWyryTaHACLcBGAsYHQ/s1600/boabronha_19.jpg"},
{"result": "https://3.bp.blogspot.com/-1Rj0-P0Gros/XwTW-0fzRzI/AAAAAAAAPt0/14Su6jMcyW0PEszV_ybZly5AUgyJkOs1gCLcBGAsYHQ/s1600/boabronha_18.jpg"},
{"result": "https://1.bp.blogspot.com/-vx9gbDKn1k8/XwTW-plW_xI/AAAAAAAAPtw/6fTY7qdCYUIj1tcw6W3AD-ksya4A6WnYACLcBGAsYHQ/s1600/boabronha_17.jpg"},
{"result": "https://4.bp.blogspot.com/-mJEF6HvdwgU/XwTW-niRcTI/AAAAAAAAPts/90NyctgQznwR-NyrucJ4YhbhA0MpWdZswCLcBGAsYHQ/s1600/boabronha_16.jpg"},
{"result": "https://4.bp.blogspot.com/-JmDNwoQ2SuM/XwTW9p6MHcI/AAAAAAAAPto/qG5W8cxBiAMlyZR9RiqDhvKCZf_8fI1wQCLcBGAsYHQ/s1600/boabronha_15.jpg"},
{"result": "https://2.bp.blogspot.com/-6Ghr9RVr_sE/XwTW9NtNYlI/AAAAAAAAPtg/L6tCjbXVUG8JCJeq7i1kP7QA8cDHOUCMQCLcBGAsYHQ/s1600/boabronha_14.jpg"},
{"result": "https://2.bp.blogspot.com/-f6VlmOHrpw4/XwTW9E6KV2I/AAAAAAAAPtk/JSA7s3Y_IognJkEV3i9pZCl742vT-J04wCLcBGAsYHQ/s1600/boabronha_13.jpg"},
{"result": "https://1.bp.blogspot.com/-5xfMdNUcJUc/XwTW8C2WeDI/AAAAAAAAPtc/MC6yfIwRQUQTQYzv5Q13ma1QduGCtA9DACLcBGAsYHQ/s1600/boabronha_12.jpg"},
{"result": "https://3.bp.blogspot.com/-kzy76xcFtGc/XwTW7X6qPMI/AAAAAAAAPtU/a6pBasFjuccPnOfobaJT_uIJ1YzP1OAsACLcBGAsYHQ/s1600/boabronha_11.jpg"},
{"result": "https://1.bp.blogspot.com/-3K_b14RzHTA/XwTW7SQTPRI/AAAAAAAAPtY/UOaKURECbzwXfvASa3g6Pz0D_Ha73Dw4wCLcBGAsYHQ/s1600/boabronha_10.jpg"},
{"result": "https://1.bp.blogspot.com/-6RRnR8kWtbE/XwTXdWHRvSI/AAAAAAAAPyw/IzixStgnJ7cadUyNJ7K_r6OyyKhAg_uMACLcBGAsYHQ/s1600/boabronha_9.jpg"},
{"result": "https://4.bp.blogspot.com/-H9UrP49GCxU/XwTXZAS0r-I/AAAAAAAAPyE/tppIiS7itrsyxAtZtlYG5TvCGR_YuP4YACLcBGAsYHQ/s1600/boabronha_8.jpg"},
{"result": "https://3.bp.blogspot.com/-HZgZzvVNbno/XwTXVqO-yOI/AAAAAAAAPxY/jSQalsw2BUs4Advrrne50et-FZAiQy6BgCLcBGAsYHQ/s1600/boabronha_7.jpg"},
{"result": "https://1.bp.blogspot.com/-f8MV0fgr1Rs/XwTXRMIssaI/AAAAAAAAPws/B6QFY6tVUGs7nGrS1iEdn1UsvRQZEOzaQCLcBGAsYHQ/s1600/boabronha_6.jpg"},
{"result": "https://1.bp.blogspot.com/-6iF0YhMhsbc/XwTXMo-dD1I/AAAAAAAAPwA/PjwDzz3vLcMiWBHx7LwKKijzNHMEswBBgCLcBGAsYHQ/s1600/boabronha_5.jpg"},
{"result": "https://4.bp.blogspot.com/-H9kiccxXXMM/XwTXEDYJwlI/AAAAAAAAPuo/mA4JIyZwZ7w-s76990YitjqO-ZZL9TV7ACLcBGAsYHQ/s1600/boabronha_3.jpg"},
{"result": "https://2.bp.blogspot.com/-gxDPEvCblJw/XwTXIHVCEKI/AAAAAAAAPvU/g3jDHiXgkXo2RYg2NjlF_Er8QNVTq34XwCLcBGAsYHQ/s1600/boabronha_4.jpg"},
{"result": "https://4.bp.blogspot.com/-pBwX3-rdXeM/XwTW_9oT_9I/AAAAAAAAPt4/_jmeK-lOJMoE4gPYvhgFqzOp-uKnNN9ygCLcBGAsYHQ/s1600/boabronha_2.jpg"},
{"result": "https://1.bp.blogspot.com/-Q5_0-e26Gxc/XwTW7YhHUvI/AAAAAAAAPtQ/d5MyyvhcL_sraSqh_LUwqUDhgG3CvYmwwCLcBGAsYHQ/s1600/boabronha_1.jpg"},
{"result": "https://images2.imgbox.com/57/e1/FRCfztV3_o.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/01/A-primeira-vez-de-Belle-Daphine-no-porno.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-2033.jpg"},
{"result": "https://sexprime.xxx/wp-content/uploads/2021/02/belle-delphine-tesao-de-novinha-pornstar-em-fotos-nuas-7225.jpg"},
{"result": "http://porno18.blog.br/thumbs/Belle-Delphine-bunda-pelada.png"},
{"result": "http://porno18.blog.br/thumbs/Belle-Delphine-foto-pelada.jpg"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9maDJk6DSVq17LOTh2GRzXj5wvosysNFALQ&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8JlWDbBzqQMBu6SVTKOcB1AMfzVWKKoYkA&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBv0_eUyQ10GI5ZFC3E7Y7FCz4eRo-LiEPQ&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_RcJmyoXniREk2-hb-sH3XfhZQv8RKkECDw&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEWUTwepObA1qlMoCBj-_ajvHt8UqrRy96g&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7W9lzpXGT9sPMX31eIK7_dtNY2ThIeI0ZA&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nx4c4WdQhnDwqtPI1iiYKzCmYjXtxAq4aw&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0Nb4Mn1PVNIMa1WMBZCbKeKnAiDR_7PciA&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdTO0JsySsiHNUnFfkXgN1PC2seKBKslxmw&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFlWJ4nHJeeCByQoleszn8eM-u3RgPbID6w&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsh9SjN4VaSBacbxb6rjX28t5n9W-wpbTzfg&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctcj4WGv_OE4Q-qgPt6kXRy9Ldb9LezL3Nw&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYH6_GqKsCZY-aSkxtVJyHnFWYnjE5G_nv8g&usqp=CAU"},
{"result": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVk77aVZErSCA01Zy-nN7xuVsMef4eaLPkLg&usqp=CAU"}
]
const belli = bellee[Math.floor(Math.random() * bellee.length)]
var belle = [ { Criador: '@sla_slazinn', result: belli.result, } ]
	res.json(belle)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})
 // SISTEMA MIA MALKOVA
app.get('/api/nsfw/miamalkova&token=:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	const malkovi = [
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-16-750x499.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-15-750x499.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-14.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-13.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-12.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-11-750x499.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-10.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-09-750x499.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-08.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-07.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-06.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-05.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-04.jpg.webp"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-02.jpg"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-01.jpg"},
{"result": "https://www.fotosdemulherpelada.com/wp-content/uploads/2021/03/Mia-Malkova-09-750x499.jpg.webp"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/09/loira-pelada-no-chao-de-casa-exibindo-o-bumbum-empinado-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/11/mia-malkova-levando-pica-no-cuzinho-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/11/loira-fodendo-no-trabalho-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2014/09/sexo-a-tres-com-duas-loiras-peitudas-com-bundas-enormes-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/03/loira-do-bucetao-greludo-tirando-o-vestido-e-a-calcinha-img2.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2017/02/rabuda-branquinha-cavalgou-no-pau-grande-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/03/loira-do-bucetao-greludo-tirando-o-vestido-e-a-calcinha-img2.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2017/08/duas-jovens-loiras-fodendo-com-um-rapaz-roludo-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2016/05/loira-e-morena-se-lambendo-e-se-rocando-no-sexo-lesbico-img1.jpg"},
{"result": "https://www.fadadosexo.com/wp-content/uploads/2017/10/loirinha-deu-o-cuzinho-e-meteu-os-dedos-na-buceta-rosada-img7.jpg"}
]
const malkovu = malkovi[Math.floor(Math.random() * malkovi.length)]
var malkova = [ { Criador: '@sla_slazinn', result: malkovu.result, } ]
	res.json(malkova)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})

// SISTEMA METADINHA

app.get('/api/image/metadinha&token=:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
	const metadi = [
  {
    "male": "https://i.ibb.co/HGZqdzb/9b8278060e2d.jpg",
    "female": "https://i.ibb.co/V3kX3Cv/bf29432e6e21.jpg"
  },
  {
    "male": "https://i.ibb.co/NFPKcPj/6d61f9c4cede.jpg",
    "female": "https://i.ibb.co/FwRqPDn/206818911fdd.jpg"
  },
  {
    "male": "https://i.ibb.co/yQzxptw/7faabc24c6ff.jpg",
    "female": "https://i.ibb.co/2Yk4P2B/47fd82f61fd1.jpg"
  },
  {
    "male": "https://i.ibb.co/cNhsYRV/7bff8e448134.jpg",
    "female": "https://i.ibb.co/j37Sc7X/a9600c228a8b.jpg"
  },
  {
    "male": "https://i.ibb.co/DbMk8nL/957395cbf134.jpg",
    "female": "https://i.ibb.co/LQ4WJMR/f13a01cc7301.jpg"
  },
  {
    "male": "https://i.ibb.co/ypvdYHW/7905e485ff20.jpg",
    "female": "https://i.ibb.co/4Z5rJrn/465bf6b56d86.jpg"
  },
  {
    "male": "https://i.ibb.co/3pKd9jZ/527105aba87a.jpg",
    "female": "https://i.ibb.co/M9B742X/f608cecc4265.jpg"
  },
  {
    "male": "https://i.ibb.co/Jn3tkg8/a1aab3d67644.jpg",
    "female": "https://i.ibb.co/CWx3NYc/8ad244372d8f.jpg"
  },
  {
    "male": "https://i.ibb.co/CbdscQp/5918b5b3b674.jpg",
    "female": "https://i.ibb.co/ZWjNrZt/8257e3c9ffc0.jpg"
  },
  {
    "male": "https://i.ibb.co/8069RmW/cfe9ed16a5b4.jpg",
    "female": "https://i.ibb.co/gPFp1DG/0e16334be10c.jpg"
  },
  {
    "male": "https://i.ibb.co/P1SsfbG/a12d71cd6b9a.jpg",
    "female": "https://i.ibb.co/p4Xp2Xh/d7f6c5420b7a.jpg"
  },
  {
    "male": "https://i.ibb.co/P17CTF9/924deeb25a3d.jpg",
    "female": "https://i.ibb.co/r55xYdy/8ee97786e6f8.jpg"
  },
  {
    "male": "https://i.ibb.co/WykFqbW/57f78370f1e2.jpg",
    "female": "https://i.ibb.co/FWSCd2C/81e637d4a839.jpg"
  },
  {
    "male": "https://i.ibb.co/rf6pKtp/53a463d8ebe9.jpg",
    "female": "https://i.ibb.co/Z2bDP7m/48990865816b.jpg"
  },
  {
    "male": "https://i.ibb.co/RYB9JWG/4428e27ef288.jpg",
    "female": "https://i.ibb.co/LCnJfT7/5732f5315f2f.jpg"
  },
  {
    "male": "https://i.ibb.co/3CLJfw3/151663d07c51.jpg",
    "female": "https://i.ibb.co/zXsJQ8R/96d088d2e0a0.jpg"
  },
  {
    "male": "https://i.ibb.co/rxBN0S5/bd3b07b67ad6.jpg",
    "female": "https://i.ibb.co/6BYPMjC/4b36a8dfca20.jpg"
  },
  {
    "male": "https://i.ibb.co/NW2dv07/58348a3d4008.jpg",
    "female": "https://i.ibb.co/sHkDdGd/87db7aaff335.jpg"
  },
  {
    "male": "https://i.ibb.co/b3sMMnW/a13cdff40c6e.jpg",
    "female": "https://i.ibb.co/LgPn4vL/257ab65eb79d.jpg"
  },
  {
    "male": "https://i.ibb.co/JzMhQ2P/45754b045a6d.jpg",
    "female": "https://i.ibb.co/nmftFnS/a1f2218f7c32.jpg"
  },
  {
    "male": "https://i.ibb.co/R72GdTZ/30ebace5e0c1.jpg",
    "female": "https://i.ibb.co/7Rnb3Y0/d1459d6b3f59.jpg"
  },
  {
    "male": "https://i.ibb.co/SmMvhb5/da465242e083.jpg",
    "female": "https://i.ibb.co/4gK0fVL/da35fc940b11.jpg"
  },
  {
    "male": "https://i.ibb.co/Tbj6tzF/e93d133529d5.jpg",
    "female": "https://i.ibb.co/wwpFfqH/98bc4eb86562.jpg"
  },
  {
    "male": "https://i.ibb.co/CJpdHyJ/348e5a66c088.jpg",
    "female": "https://i.ibb.co/9wd2mTM/fd4b6af0ccac.jpg"
  },
  {
    "male": "https://i.ibb.co/Xkp1wx5/3a15abeb6394.jpg",
    "female": "https://i.ibb.co/8mzjZrt/3b2d60d15de4.jpg"
  },
  {
    "male": "https://i.ibb.co/mSMmmGx/300e252914f3.jpg",
    "female": "https://i.ibb.co/LvTRt2w/c8f8d0b98c70.jpg"
  },
  {
    "male": "https://i.ibb.co/LpctfNL/e1a158f621ba.jpg",
    "female": "https://i.ibb.co/YXpvh3j/2a91663a9f0a.jpg"
  },
  {
    "male": "https://i.ibb.co/xgTsmW8/7ca77ee661d6.jpg",
    "female": "https://i.ibb.co/DMPWv4S/e3af8d2a6673.jpg"
  },
  { 
    "male": "https://telegra.ph/file/c78595ee61186fab35568.jpg",
    "female": "https://telegra.ph/file/e2817d22dbffc1bbfd0b4.jpg"
  },
  {
    "male": "https://telegra.ph/file/f66a2aa1d2a47b7d03643.jpg",
    "female": "https://telegra.ph/file/5f8ad151fdb134c75222a.jpg"
  },
  {
     "male": "https://i.ibb.co/DgdBT0r/d1cfc573c584.jpg",
     "female": "https://i.ibb.co/kGHZsfH/71916990ed01.jpg"
  }
]
	 
const metadii = metadi[Math.floor(Math.random() * metadi.length)]
var metadinha = [ { Criador: '@sla_slazinn', male: metadii.male, female: metadii.female } ]
	res.json(metadinha)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})

// SISTEMA COSPLAY

  app.get('/api/nsfw/cosplay&token=:q2', async (req, res) => {
	var isToken = token.includes(`${req.params.q2}`)
	var tokencheck = isToken ? 's' : 'n'
	if (tokencheck != 'n') {
const coosplay = [
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-34.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-33.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-32.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-31.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-30.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-29.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-28.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-27.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-26.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-25.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-24.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-21.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-20.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-19.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-18.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-17.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-16.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-15.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-14.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-13.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-12.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-10.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-11.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-9.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-8.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-23.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-22.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-7.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-6.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-5.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-4.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-3.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-2.jpg"},
{"result": "https://www.musasbrasil.com/wp-content/uploads/2021/06/Fotos-gostosas-do-cosplay-1.jpg"},
{"result": "https://images2.imgbox.com/3f/84/MwHlSfRa_o.jpg"},
{"result": "https://images2.imgbox.com/c7/13/sFGdbGqF_o.jpg"},
{"result": "https://images2.imgbox.com/67/0c/jXPK8hja_o.jpg"},
{"result": "https://images2.imgbox.com/b7/a0/c93YybM0_o.jpg"},
{"result": "https://images2.imgbox.com/70/ad/MFPORP3q_o.jpg"},
{"result": "https://images2.imgbox.com/af/5f/lwSjwrQm_o.jpg"},
{"result": "https://images2.imgbox.com/2a/15/J47tj1cx_o.jpg"},
{"result": "https://images2.imgbox.com/81/61/bRoK2Ni5_o.jpg"},
{"result": "https://images2.imgbox.com/63/bb/hNaxR4f0_o.jpg"},
{"result": "https://images2.imgbox.com/46/44/BQus5CVx_o.jpg"},
{"result": "https://images2.imgbox.com/7a/c9/6Sip3IqO_o.jpg"},
{"result": "https://images2.imgbox.com/c4/68/1LGzakg2_o.jpg"},
{"result": "https://thumb-p8.xhcdn.com/a/OZ_WH91Tm116Jn7WZBG3ng/000/307/551/648_1000.jpg"},
{"result": "https://thumb-p3.xhcdn.com/a/PCMbAfR8OhxmST9hn6rh3Q/000/307/551/683_1000.jpg"},
{"result": "https://thumb-p4.xhcdn.com/a/i97HolMPI4MQ1tdDOe_wSg/000/307/551/714_1000.jpg"},
{"result": "https://thumb-p7.xhcdn.com/a/xz4g87q0G8lf9r8EKdBCLQ/000/307/551/747_1000.jpg"},
{"result": "https://thumb-p6.xhcdn.com/a/kmnrXW5_4uT0XOo-ZC0YVQ/000/307/551/756_1000.jpg"},
{"result": "https://thumb-p5.xhcdn.com/a/2q-07ISzf2Q-GbVMUcdGoQ/000/307/551/815_1000.jpg"},
{"result": "https://thumb-p2.xhcdn.com/a/eTRj62OQ8mxj9h9I9L7WTA/000/307/551/832_1000.jpg"},
{"result": "https://thumb-p4.xhcdn.com/a/_YyT2XfXLEOuTQpNkxrdLw/000/307/551/904_1000.jpg"},
{"result": "https://thumb-p9.xhcdn.com/a/UVPJLGabrioHf8PGm80rhA/000/420/135/899_1000.jpg"},
{"result": "https://thumb-p8.xhcdn.com/a/EAG93B1MNg8Vi92DB2x_Ew/000/420/135/828_1000.jpg"},
{"result": "https://thumb-p3.xhcdn.com/a/zHPiv1k9h0i2GOOV2atomg/000/420/135/833_1000.jpg"},
{"result": "https://thumb-p8.xhcdn.com/a/o91VKnFfecmWt8wbeUx_Lw/000/420/135/838_1000.jpg"},
{"result": "https://thumb-p2.xhcdn.com/a/7F97arcueEASHOwGF9fVCw/000/420/135/842_1000.jpg"},
{"result": "https://thumb-p3.xhcdn.com/a/Tu0ZwoZZgi4r43MvYYtDkg/000/420/135/843_1000.jpg"},
{"result": "https://thumb-p4.xhcdn.com/a/1dXty0MhC2qZ2-flWlcDvg/000/420/135/864_1000.jpg"},
{"result": "https://thumb-p8.xhcdn.com/a/rqXfI4YwbLtQR8Ei2BSYaQ/000/420/135/868_1000.jpg"},
{"result": "https://thumb-p2.xhcdn.com/a/6QnPtdGSucXY_flp5tkGow/000/420/135/882_1000.jpg"},
{"result": "https://thumb-p8.xhcdn.com/a/vJBj3Ud1dAQLIX6Cwl3tuQ/000/420/135/878_1000.jpg"},
{"result": "https://thumb-p6.xhcdn.com/a/aMcwo8TFgF89fXwPcdrSQg/000/420/135/886_1000.jpg"},
{"result": "https://thumb-p9.xhcdn.com/a/0iowDIJoEV-iGYD43fqb5A/000/420/135/819_1000.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-14-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-10-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-8-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-6-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-5-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-4-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-1-scaled.jpg"},
{"result": "https://hentaidude.tv/wp-content/uploads/2021/05/NierAutomata-2B-Cosplay-by-ElizaMiaoMiao-2-scaled.jpg"},
{"result": "https://images2.imgbox.com/a6/90/b3aQ4odc_o.jpg"},
{"result": "https://images2.imgbox.com/f1/ff/UJ37CXEm_o.jpg"},
{"result": "https://images2.imgbox.com/10/1e/Qe9wuQ6B_o.jpg"},
{"result": "https://images2.imgbox.com/bc/6c/t5RQI0hR_o.jpg"},
{"result": "https://images2.imgbox.com/ab/6e/ipkodIe2_o.jpg"},
{"result": "https://images2.imgbox.com/e5/66/RmGHb3I7_o.jpg"},
{"result": "https://images2.imgbox.com/7e/e2/0QO70ixT_o.jpg"},
{"result": "https://images2.imgbox.com/e2/59/VDRxnAsp_o.jpg"},
{"result": "https://images2.imgbox.com/50/9f/Lq37ZcOl_o.jpg"},
{"result": "https://images2.imgbox.com/5c/75/Fxpw31fW_o.jpg"},
{"result": "https://images2.imgbox.com/02/6a/HyAlaNar_o.jpg"},
{"result": "https://images2.imgbox.com/96/71/NtRxx4Nx_o.jpg"},
{"result": "https://images2.imgbox.com/bd/10/mSnxThGi_o.jpg"},
{"result": "https://images2.imgbox.com/89/97/ft17xjJ3_o.jpg"},
{"result": "https://images2.imgbox.com/39/a2/QPqXMnMo_o.jpg"},
{"result": "https://images2.imgbox.com/bc/f8/dzHaH7S0_o.jpg"},
{"result": "https://images2.imgbox.com/33/76/keDwNp4A_o.jpg"},
{"result": "https://images2.imgbox.com/1a/02/rmYs9rFV_o.jpg"},
{"result": "https://images2.imgbox.com/2b/f6/lqnu5blv_o.jpg"},
{"result": "https://images2.imgbox.com/40/82/KAKLFCXZ_o.jpg"},
{"result": "https://images2.imgbox.com/e1/22/i9jBzV5k_o.jpg"},
{"result": "https://images2.imgbox.com/b9/2b/SPJYd5sE_o.jpg"},
{"result": "https://images2.imgbox.com/bb/f5/JsRhrzcP_o.jpg"},
{"result": "https://images2.imgbox.com/32/c9/vJ2zpSlz_o.jpg"},
{"result": "https://images2.imgbox.com/1b/df/rrmiTTYY_o.jpg"},
{"result": "https://images2.imgbox.com/50/09/ObvWf5JU_o.jpg"},
{"result": "https://images2.imgbox.com/67/d9/y93EFsEG_o.jpg"},
{"result": "https://images2.imgbox.com/91/6f/Pvek51dw_o.jpg"},
{"result": "https://images2.imgbox.com/10/25/sumLK8n2_o.jpg"},
{"result": "https://images2.imgbox.com/16/c6/DCyFX6m6_o.jpg"},
{"result": "https://images2.imgbox.com/49/ed/RiqShius_o.jpg"},
{"result": "https://images2.imgbox.com/9f/b7/ADP2u6Cw_o.jpg"},
{"result": "https://images2.imgbox.com/0d/f6/ZEUAmuLg_o.jpg"},
{"result": "https://images2.imgbox.com/8e/7a/UgIhznhM_o.jpeg"},
{"result": "https://images2.imgbox.com/81/dd/OcDgJAxP_o.jpeg"},
{"result": "https://images2.imgbox.com/32/71/O1VHH6su_o.jpeg"},
{"result": "https://images2.imgbox.com/b8/2f/GG39kfJv_o.jpeg"},
{"result": "https://images2.imgbox.com/44/61/53nu3eHT_o.jpeg"},
{"result": "https://images2.imgbox.com/ad/ec/8hOfj4Eu_o.jpeg"},
{"result": "https://images2.imgbox.com/cf/c3/rsMuTrmp_o.jpeg"},
{"result": "https://images2.imgbox.com/bd/7e/ooX82t0P_o.jpeg"},
{"result": "https://images2.imgbox.com/c3/0f/GztTkqqP_o.jpeg"},
{"result": "https://images2.imgbox.com/16/e9/dZgDV6yc_o.jpeg"},
{"result": "https://images2.imgbox.com/f2/b3/PG9jzgTb_o.jpeg"},
{"result": "https://images2.imgbox.com/e5/3b/EBX4L3Zc_o.jpeg"},
{"result": "https://images2.imgbox.com/d8/27/me9iKqoM_o.jpeg"},
{"result": "https://images2.imgbox.com/d8/27/me9iKqoM_o.jpeg"},
{"result": "https://images2.imgbox.com/d3/52/nzs0b8fA_o.jpeg"},
{"result": "https://images2.imgbox.com/28/7c/f6SVPMxZ_o.jpeg"},
{"result": "https://images2.imgbox.com/bd/26/dAxx2KKh_o.jpeg"},
{"result": "https://images2.imgbox.com/58/b8/0EWFj1kg_o.jpeg"},
{"result": "https://images2.imgbox.com/5c/16/rz3jTFjl_o.jpeg"},
{"result": "https://images2.imgbox.com/72/92/4L1GGZYS_o.jpeg"},
{"result": "https://images2.imgbox.com/f9/15/ourLVakD_o.jpg"},
{"result": "https://images2.imgbox.com/9d/d9/1tKGxu7A_o.jpg"},
{"result": "https://images2.imgbox.com/7d/5f/z6mHWR5m_o.jpg"},
{"result": "https://images2.imgbox.com/ac/c8/XVtXab6K_o.jpg"},
{"result": "https://images2.imgbox.com/33/f3/fKT5hx5W_o.jpg"},
{"result": "https://images2.imgbox.com/bf/d3/bGAsxtlx_o.jpg"},
{"result": "https://images2.imgbox.com/6c/c3/872hYT85_o.jpg"},
{"result": "https://images2.imgbox.com/ac/73/G8dsE6p9_o.jpg"},
{"result": "https://images2.imgbox.com/d0/c6/J2bIZLBv_o.jpg"},
{"result": "https://images2.imgbox.com/47/f5/enjZpoTT_o.jpg"},
{"result": "https://images2.imgbox.com/40/9e/fhtzNi9u_o.jpg"},
{"result": "https://images2.imgbox.com/c3/75/X5UH1y7H_o.jpg"},
{"result": "https://images2.imgbox.com/64/a7/dROlWBXR_o.jpeg"},
{"result": "https://images2.imgbox.com/b4/cb/VtOKLFUt_o.jpeg"},
{"result": "https://images2.imgbox.com/ea/2f/z8uxmx1D_o.jpeg"},
{"result": "https://images2.imgbox.com/2c/e1/aiqvQYvx_o.jpeg"},
{"result": "https://images2.imgbox.com/7f/9c/klEmXrwk_o.jpeg"},
{"result": "https://images2.imgbox.com/28/90/T2918ybe_o.jpeg"},
{"result": "https://images2.imgbox.com/3a/63/zw4k8Joe_o.jpeg"},
{"result": "https://images2.imgbox.com/cb/7b/xIg12aNi_o.jpeg"},
{"result": "https://images2.imgbox.com/f4/96/VmBErxyQ_o.jpeg"},
{"result": "https://images2.imgbox.com/88/80/Fo0B08uo_o.jpeg"},
{"result": "https://images2.imgbox.com/8f/45/p0LrbhnX_o.jpeg"},
{"result": "https://images2.imgbox.com/c8/07/d4RcJepO_o.jpeg"},
{"result": "https://images2.imgbox.com/37/9e/WSa6kUF1_o.jpeg"},
{"result": "https://images2.imgbox.com/82/b8/RZtq9yK6_o.jpeg"},
{"result": "https://images2.imgbox.com/3e/31/o2LsoRXo_o.jpeg"},
{"result": "https://images2.imgbox.com/bb/75/rdUU3wXK_o.jpeg"},
{"result": "https://images2.imgbox.com/5e/88/E3QtC8ME_o.jpeg"},
{"result": "https://images2.imgbox.com/16/ea/xjZ1Y5v4_o.jpeg"},
{"result": "https://images2.imgbox.com/0c/04/TV4DwUSs_o.jpeg"},
{"result": "https://images2.imgbox.com/db/d6/rFszEtP4_o.jpeg"},
{"result": "https://images2.imgbox.com/49/00/0EqeBVgM_o.jpeg"},
{"result": "https://images2.imgbox.com/ae/d2/IEZtcP0G_o.jpeg"},
{"result": "https://images2.imgbox.com/33/aa/Caj7rBqA_o.jpeg"},
{"result": "https://images2.imgbox.com/22/b4/GFZt23SA_o.jpeg"},
{"result": "https://images2.imgbox.com/33/c4/xlH5KnfA_o.jpeg"},
{"result": "https://images2.imgbox.com/31/76/in9rb3hB_o.jpeg"},
{"result": "https://images2.imgbox.com/48/cd/oNC4viU1_o.jpeg"},
{"result": "https://images2.imgbox.com/d6/26/9Wp2DJfC_o.jpeg"},
{"result": "https://images2.imgbox.com/86/b1/48eTniXf_o.jpeg"},
{"result": "https://images2.imgbox.com/f4/36/ES3dS4lf_o.jpeg"},
{"result": "https://images2.imgbox.com/25/ad/DjYbiMsA_o.jpeg"},
{"result": "https://images2.imgbox.com/97/9f/TS6lGozB_o.jpeg"},
{"result": "https://images2.imgbox.com/4f/9d/4i4qdiYv_o.jpeg"}
]
const cossplay = coosplay[Math.floor(Math.random() * coosplay.length)]
var cosplay = [ { Criador: '@sla_slazinn', result: cossplay.result } ]
	res.json(cosplay)
} else {
	res.status(200).send({
		status: true,
		message: 'server ok',
		error: 'infelizmente você não possui o token para realizar a consulta, compre o token com o Slazinn > wa.me/5594991423691'
	  });
}
})

app.listen(port, ( ) => {
    console.info(`Aplicaçao rodando em http://localhost:${port}`);
});
