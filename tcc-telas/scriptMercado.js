var dadoCompra = [
  {
    id: "1",
    nome: "café",
    preco: `150`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.",
    localizacao: `bela aurora`,
  },
  {
    id: "2",
    nome: "agrotóxico",
    preco: `150`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "Agrotóxicos são produtos químicos sintéticos usados para matar insetos, larvas, fungos, carrapatos sob a justificativa de controlar as doenças provocadas por esses vetores e de regular o crescimento da vegetação",
    localizacao: `bela aurora`,
  },
  {
    id: "3",
    nome: "feijão",
    preco: `250`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros da família Fabaceae.",
    localizacao: `bela aurora`,
  },
  {
    id: "4",
    nome: "Pulverizador Automotriz Jacto Uniport 2030",
    preco: `250`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "Pulverizador automotriz com RESERVATÓRIO DE 2.000 LITROS e BARRAS DE 24 ou 30 METROS. A transmissão hidrostática 4x4, juntamente com um motor de 198 cv e baixo peso conferem a esse pulverizador a capacidade de trabalhar em uma ampla variedade de terrenos com qualidade e alto rendimento operacional.",
    localizacao: `bela aurora`,
  },
  {
    id: "5",
    nome: "açucar",
    preco: `150`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "O açúcar é um termo genérico para carboidratos cristalizados comestíveis, principalmente sacarose, lactose e frutose.",
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
    descricao: "Um trator é um veículo motorizado projetado para executar uma variedade de tarefas agrícolas e de construção. Ele é especialmente projetado para fornecer tração e potência para puxar ou empurrar implementos agrícolas pesados, como arados, grades, semeadores, colheitadeiras, entre outros.",
    localizacao: `bela aurora`,
  },
  {
    id: "2",
    nome: "caminhão",
    preco: `150`,
    tipo: "nao-consumivel",
    fornecedor: "carlos",
    descricao: "Um caminhão é um veículo de grande porte projetado para o transporte de cargas. Ele consiste em um chassi robusto, com rodas e um compartimento de carga na parte traseira. Os caminhões são movidos por motores a diesel e geralmente possuem uma cabine na frente para acomodar o motorista e os passageiros.",
    localizacao: `bela aurora`,
  },
  {
    id: "3",
    nome: "Plantadeira",
    preco: `250`,
    tipo: "consumivel",
    fornecedor: "carlos",
    descricao: "Uma plantadeira é um implemento agrícola utilizado para o plantio de sementes de forma precisa e eficiente. Ela é projetada para distribuir as sementes em fileiras e na profundidade correta, além de cobri-las com solo para garantir o desenvolvimento adequado das plantas.",
    localizacao: `bela aurora`,
  }
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
