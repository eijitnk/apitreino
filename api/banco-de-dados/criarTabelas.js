const modelos = [
  require('../rotas/fornecedores/ModeloTabelaFornecedor'),
  require('../rotas/produtos/ModeloTabelaProduto')
]

// ModeloTabela
//   .sync()
//   .then(() => console.log('Tabela criada com sucesso'))
//   .catch(console.log)

async function criarTabelas() {
  for(let contador = 0; contador < modelos.length; contador++) {
    const modelo = modelos[contador]
    await modelo.sync()
  }
}

criarTabelas()