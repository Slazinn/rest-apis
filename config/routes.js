const express = require('express')
const fs = require('fs')
const bellee = fs.readFileSync('./image/belle.js')
const pussyy = fs.readFileSync('./image/pussy.js')
const saycatt = fs.readFileSync('./video/saycat.js')

const routes = express.Router()
const semchave = `Apis em desenvolvimento, tá achando ruim? faça a sua:-:`
//TELA INICIAL

  routes.get('/nao', (req, res) => {
      return res.json(semchave)
  })
  
  routes.post('/nao', (req, res) => {
      const body = req.body
      
      if (!body)
         return res.status(204).end()
      
      semchave.push(body)
      return res.json(body)
  })
         
// SISTEMA DA BELLE
jsonData = JSON.parse(bellee);
pinga = Math.floor(Math.random() * jsonData.length);
res = jsonData[pinga];

var belle  = [ { Criador: '@sla_slazinn', result: res.result, }  ]
  
  routes.get('/api/nsfw/belle', (req, res) => {
      return res.json(belle)
  })
  
  routes.post('/api/nsfw/belle', (req, res) => {
      const body = req.body
      
      if (!body)
         return res.status(404).end()
      
      belle.push(body)
      return res.json(body)
  } )
 
 // SISTEMA PUSSY
jsonData = JSON.parse(pussyy);
pinga = Math.floor(Math.random() * jsonData.length);
res = jsonData[pinga];

var pussy = [ { Criador: '@sla_slazinn', result: res.result, } ]

  routes.get('/api/nsfw/pussy', (req, res) => {
      return res.json(pussy) 
  })
  routes.post('/api/nsfw/pussy', (req, res) => {
      const body = req.body
      
      if (!body)
         return res.status(404).end()
      
      pussy.push(body)
      return res.json(body)
  }) 
  
   // SISTEMA SAYCAT
jsonData = JSON.parse(saycatt);
pinga = Math.floor(Math.random() * jsonData.length);
res = jsonData[pinga];

var saycat = [ { Criador: '@sla_slazinn', result: res.result, } ]

  routes.get('/api/random/saycat', (req, res) => {
      return res.json(saycat) 
  })
  routes.post('/api/random/saycat', (req, res) => {
      const body = req.body
      
      if (!body)
         return res.status(404).end()
      
      saycat.push(body) 
      return res.json(body)
  }) 
  
module.exports = routes       