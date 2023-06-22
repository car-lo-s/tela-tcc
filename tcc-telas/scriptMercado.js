var dadoCompra = [
  {
    id: "1",
    nome: "cafe",
    preco: `150`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "2",
    nome: "agrotoxico",
    preco: `150`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "teste2 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "3",
    nome: "feijao",
    preco: `250`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "4",
    nome: "maquinario",
    preco: `250`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "5",
    nome: "acucar",
    preco: `150`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste2 teste teste teste",
    localizacao: `bela aurora`,
  },
];

var dadoAluguel = [
  {
    id: "1",
    nome: "trator",
    preco: `150`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "2",
    nome: "caminhao",
    preco: `150`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "teste2 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "3",
    nome: "carro",
    preco: `250`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
  {
    id: "4",
    nome: "astra",
    preco: `250`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "teste1 teste teste teste",
    localizacao: `bela aurora`,
  },
];
var itemLojaAnunciarTela = document.querySelector(".itemLojaAnunciar");
var elementoClone = document.querySelector(`.itemCard`);
var area = document.querySelector(`.itemLojaCompra`);
var areaAluguel = document.querySelector(`.itemLojaAluguel`);
var valorPesquisa = document.querySelector(`.mercadoPesquisa input`);
var pesquisar = document.querySelector(`.pesquisar`);
var ordem = document.querySelector(`.ordem`);
const opcaoTopo = document.querySelectorAll(".opcao-topo");
var apagarElemento;
var fechar = document.querySelector(".itemLojaAnunciar p");

dadoCompra.sort(function (a, b) {
  return a.nome.localeCompare(b.nome);
});
dadoAluguel.sort(function (a, b) {
  return a.nome.localeCompare(b.nome);
});

//   console.log(dadoAluguel)

ordem.addEventListener(`change`, function () {
  if (ordem == `nome`) {
    alert(ordem.value);
  }
});

dadoCompra.map((a) => {
  var clone = elementoClone.cloneNode(true);
  clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
  clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
  clone.querySelector(`.itemLocalizacao`).textContent =
    `Local: ` + a.localizacao;
  clone.querySelector(`.itemPreco`).textContent = `Valor: ` + a.preco + ` R$`;
  area.appendChild(clone);
});
dadoAluguel.map((a) => {
  var clone = elementoClone.cloneNode(true);
  clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
  clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
  clone.querySelector(`.itemLocalizacao`).textContent =
    `Local: ` + a.localizacao;
  clone.querySelector(`.itemPreco`).textContent = `Valor: ` + a.preco + ` R$`;
  // console.log(clone)
  areaAluguel.appendChild(clone);
});

pesquisar.addEventListener(`click`, () => {
  apagarElemento = document.querySelectorAll(`.itemLojaCompra .itemCard`);
  apagarElemento.forEach((a) => {
    a.remove();
  });
  apagarElemento = document.querySelectorAll(`.itemLojaAluguel .itemCard`);
  apagarElemento.forEach((a) => {
    a.remove();
  });
  dadoCompra.map((a) => {
    if (a.nome.includes(valorPesquisa.value)) {
      var clone = elementoClone.cloneNode(true);
      clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
      clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
      clone.querySelector(`.itemLocalizacao`).textContent =
        `Local: ` + a.localizacao;
      clone.querySelector(`.itemPreco`).textContent =
        `Valor: ` + a.preco + ` R$`;
      area.appendChild(clone);
    }
  });
  dadoAluguel.map((a) => {
    if (a.nome.includes(valorPesquisa.value)) {
      var clone = elementoClone.cloneNode(true);
      clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
      clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
      clone.querySelector(`.itemLocalizacao`).textContent =
        `Local: ` + a.localizacao;
      clone.querySelector(`.itemPreco`).textContent =
        `Valor: ` + a.preco + ` R$`;
      areaAluguel.appendChild(clone);
    }
  });
});

opcaoTopo.forEach((opcao, index) => {
  opcao.addEventListener("click", function () {
    // Remove a classe 'ativo' de todas as divs
    opcaoTopo.forEach((div) => {
      div.classList.remove("ativo");
    });

    // Adiciona a classe 'ativo' apenas na div clicada
    opcao.classList.add("ativo");
    if (index == 0) {
      area.classList.remove("nao-visivel");
      if (ordem.value == `nome`) {
        apagarElemento = document.querySelectorAll(`.itemLojaCompra .itemCard`);
        apagarElemento.forEach((a) => {
          a.remove();
        });
        dadoCompra.sort(function (a, b) {
          return a.nome.localeCompare(b.nome);
        });
        dadoCompra.map((a) => {
          var clone = elementoClone.cloneNode(true);
          clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
          clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
          clone.querySelector(`.itemLocalizacao`).textContent =
            `Local: ` + a.localizacao;
          clone.querySelector(`.itemPreco`).textContent =
            `Valor: ` + a.preco + ` R$`;
          area.appendChild(clone);
        });
      } else if (ordem.value == `tipo`) {
        apagarElemento = document.querySelectorAll(`.itemLojaCompra .itemCard`);
        apagarElemento.forEach((a) => {
          a.remove();
        });
        dadoCompra.forEach((a) => {
          if (a.tipo == `consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            area.appendChild(clone);
          }
        });
        dadoCompra.forEach((a) => {
          if (a.tipo == `nao-consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            area.appendChild(clone);
          }
        });
      }
    } else if (index == 1) {
      area.classList.add("nao-visivel");
      areaAluguel.classList.remove("nao-visivel");
      if (ordem.value == `nome`) {
        apagarElemento = document.querySelectorAll(
          `.itemLojaAluguel .itemCard`
        );

        apagarElemento.forEach((a) => {
          a.remove();
        });
        dadoAluguel.sort(function (a, b) {
          return a.nome.localeCompare(b.nome);
        });
        dadoAluguel.map((a) => {
          var clone = elementoClone.cloneNode(true);
          clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
          clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
          clone.querySelector(`.itemLocalizacao`).textContent =
            `Local: ` + a.localizacao;
          clone.querySelector(`.itemPreco`).textContent =
            `Valor: ` + a.preco + ` R$`;
          areaAluguel.appendChild(clone);
        });
      } else if (ordem.value == `tipo`) {
        apagarElemento = document.querySelectorAll(
          `.itemLojaAluguel .itemCard`
        );
        apagarElemento.forEach((a) => {
          a.remove();
        });
        dadoAluguel.forEach((a) => {
          if (a.tipo == `consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            areaAluguel.appendChild(clone);
          }
        });
        dadoAluguel.forEach((a) => {
          if (a.tipo == `nao-consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            areaAluguel.appendChild(clone);
          }
        });
      }
    } else if (index == 2) {
      itemLojaAnunciarTela.classList.remove("nao-visivel");
    }
  });
});

fechar.addEventListener("click", function () {
  itemLojaAnunciarTela.classList.add("nao-visivel");
});
var btnCar = document.querySelectorAll(".btnCar");
btnCar.forEach((a) => {
  a.addEventListener("click", function () {});
});

var btnCompraDetalhe = document.querySelector('.telaCompraFechar');
btnCompraDetalhe.addEventListener('click', function () {
    document.querySelector('.telaCompra').classList.add("nao-visivel");
});
