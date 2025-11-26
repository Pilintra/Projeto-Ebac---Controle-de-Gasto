const matrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["Total", 0],
];

// Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => `R$ ${valor.toFixed(2).replace('.', ',')}`;

// Obter valores do formulário
const obterValorInformado = () => Number.parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) =>
  matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

// Atualizar valores da interface
const atualizaInterface = () => {
    for (const [nome, valor] of matrizGastos) {
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    }
}


function adicionarGasto() {

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert("Por favor, insira um valor positivo para o gasto.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizaInterface();
    limparCampos();
}
