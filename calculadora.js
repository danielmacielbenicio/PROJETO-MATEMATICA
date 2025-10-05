/**
 * Classe que representa um produto com nome e custo.
 * Equivalente ao seu Produto.java
 */
class Produto {
  /**
   * @param {string} nome O nome do produto.
   * @param {number} custo O custo de produção do produto.
   */
  constructor(nome, custo) {
    this.nome = nome;
    this.custo = custo;
  }

  getCusto() {
    return this.custo;
  }

  getNome() {
    return this.nome;
  }
}

/**
 * Função principal que realiza o cálculo do lucro máximo.
 * Esta função será chamada pelo botão no arquivo HTML.
 */
function calcularLucroMaximo() {
  // 1. Obter os valores dos campos do HTML
  const quantInput = document.getElementById('quantidade');
  const produtoSelect = document.getElementById('produto');
  
  const quantidade = parseInt(quantInput.value);
  const produtoEscolhido = produtoSelect.value;

  // Elementos para exibir o resultado
  const precoOtimoEl = document.getElementById('precoOtimo');
  const lucroMaximoEl = document.getElementById('lucroMaximo');

  // Validação simples de entrada
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  // 2. Definir os produtos disponíveis
  const pelucia = new Produto("Pelúcia", 18);
  const croche = new Produto("Crochê", 32);
  
  let produto;
  if (produtoEscolhido === "pelucia") {
    produto = pelucia;
  } else {
    produto = croche;
  }

  // 3. Lógica de cálculo (adaptada do seu Main.java)
  const a = -1;
  const b = quantidade + produto.getCusto();
  const c = -quantidade * produto.getCusto();

  // Ponto de máximo (Preço ótimo de venda)
  const pontoMax = -b / (2 * a);

  // Lucro máximo
  const lucroMax = a * Math.pow(pontoMax, 2) + b * pontoMax + c;

  // 4. Exibir o resultado formatado na página
  precoOtimoEl.textContent = `R$ ${pontoMax.toFixed(2)}`;
  lucroMaximoEl.textContent = `R$ ${lucroMax.toFixed(2)}`;
}