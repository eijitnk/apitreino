class ValorNaoSuportado extends Error {
  constructor(contenType) {
    super(`O tipo de conteúdo ${contenType} não suportado`)
    this.name = 'ValorNaoSuportado'
    this.idErro = 3
  }
}

module.exports = ValorNaoSuportado
