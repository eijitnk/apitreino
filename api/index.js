const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.get('/api/filmes', (requisicao, resposta) => {
  const filmes = [
    { nome: 'Os Vingadores 3' },
    { nome: 'Destacamento Blood' },
    { nome: 'Pantera Negra' }
  ]

  resposta.send(JSON.stringify(filmes))
})

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))