var dadoCompra = [
  {
    id: "1",
    nome: "café",
    preco: `10,00`,
    tipo: "consumivel",
    fornecedor: "Carlos",
    descricao: "O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.",
    localizacao: `Vale Esperanca`,
    localImg:`https://static.itdg.com.br/images/auto-auto/a28650d9a16731fcd02b535f3fca1fc8/shutterstock-529515136.jpg`
  },
  {
    id: "2",
    nome: "agrotóxico",
    preco: `150,00`,
    tipo: "nao-consumivel",
    fornecedor: "Joao",
    descricao: "Agrotóxicos são produtos químicos sintéticos usados para matar insetos, larvas, fungos, carrapatos sob a justificativa de controlar as doenças provocadas por esses vetores e de regular o crescimento da vegetação",
    localizacao: `Bela Aurora`,
    localImg:`https://www.oestadonet.com.br/media/k2/items/src/abee0abc7390017b9e9a9a019be29161.jpg`
  },
  {
    id: "3",
    nome: "feijão",
    preco: `20,00`,
    tipo: "consumivel",
    fornecedor: "Larissa",
    descricao: "Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros da família Fabaceae.",
    localizacao: `Jardim America`,
    localImg:`https://media.istockphoto.com/id/904936036/pt/foto/black-beans-in-bag-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=0VxHCiV-GwLPqD8pjz5DGKL9cbf2s6_4GwNWyRAXF_0=`
  },
  {
    id: "4",
    nome: "Pulverizador Automotriz Jacto Uniport",
    preco: `550.000,00`,
    tipo: "nao-consumivel",
    fornecedor: "Roberto",
    descricao: "Pulverizador automotriz com RESERVATÓRIO DE 2.000 LITROS e BARRAS DE 24 ou 30 METROS. A transmissão hidrostática 4x4, juntamente com um motor de 198 cv e baixo peso conferem a esse pulverizador a capacidade de trabalhar em uma ampla variedade de terrenos com qualidade e alto rendimento operacional.",
    localizacao: `Castelo Branco`,
    localImg:`https://imagens.mfrural.com.br/mfrural-produtos-us/445353-672203-70903399-pulverizador-automotriz.jpg`
  },
  {
    id: "5",
    nome: "Adubo Forth JARDIM",
    preco: `100,00`,
    tipo: "consumivel",
    fornecedor: "Tiago",
    descricao: "O açúcar é um termo genérico para carboidratos cristalizados comestíveis, principalmente sacarose, lactose e frutose.",
    localizacao: `Cobilandia`,
    localImg:`https://http2.mlstatic.com/D_NQ_NP_809579-MLB69640191693_052023-O.webp`
  },
];

var dadoSafra = [
  {
    id: "1",
    nome: "trator",
    preco: `2150,00`,
    tipo: "nao-consumivel",
    fornecedor: "Junior",
    descricao: "Um trator é um veículo motorizado projetado para executar uma variedade de tarefas agrícolas e de construção. Ele é especialmente projetado para fornecer tração e potência para puxar ou empurrar implementos agrícolas pesados, como arados, grades, semeadores, colheitadeiras, entre outros.",
    localizacao: `Vista Mar`,
    localImg:`https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/admin/imagens/noticias/massey-ferguson-lanca-trator-para-pequeno-agricultor_f4f94ea6be7b1f7c135d281d54fab3b2.jpg`
  },
  {
    id: "2",
    nome: "caminhão",
    preco: `3500,00`,
    tipo: "nao-consumivel",
    fornecedor: "Mateus",
    descricao: "Um caminhão é um veículo de grande porte projetado para o transporte de cargas. Ele consiste em um chassi robusto, com rodas e um compartimento de carga na parte traseira. Os caminhões são movidos por motores a diesel e geralmente possuem uma cabine na frente para acomodar o motorista e os passageiros.",
    localizacao: `Bandeirantes`,
    localImg:`https://s2-autoesporte.glbimg.com/SF5Sqmhnzq0roavfICmTA0sXILw=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/H/sfjhrFQweCTEk8eBfwbA/20c0492-003.jpg`
  },
  {
    id: "3",
    nome: "Plantadeira",
    preco: `4000,00`,
    tipo: "nao-consumivel",
    fornecedor: "Ronaldo",
    descricao: "Uma plantadeira é um implemento agrícola utilizado para o plantio de sementes de forma precisa e eficiente. Ela é projetada para distribuir as sementes em fileiras e na profundidade correta, além de cobri-las com solo para garantir o desenvolvimento adequado das plantas.",
    localizacao: `Praia da Costa`,
    localImg:`https://broto.com.br/media/catalog/product/p/l/plantadeirajd1113--1_5.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=345&width=486`
  }
];
var dadoAluguel = [
  {
    id: "1",
    nome: "trator",
    preco: `2150,00`,
    tipo: "nao-consumivel",
    fornecedor: "Junior",
    descricao: "Um trator é um veículo motorizado projetado para executar uma variedade de tarefas agrícolas e de construção. Ele é especialmente projetado para fornecer tração e potência para puxar ou empurrar implementos agrícolas pesados, como arados, grades, semeadores, colheitadeiras, entre outros.",
    localizacao: `Vista Mar`,
    localImg:`https://mlqt0se4pk9p.i.optimole.com/q:85/https://www.autodata.com.br/admin/imagens/noticias/massey-ferguson-lanca-trator-para-pequeno-agricultor_f4f94ea6be7b1f7c135d281d54fab3b2.jpg`
  },
  {
    id: "2",
    nome: "caminhão",
    preco: `3500,00`,
    tipo: "nao-consumivel",
    fornecedor: "Mateus",
    descricao: "Um caminhão é um veículo de grande porte projetado para o transporte de cargas. Ele consiste em um chassi robusto, com rodas e um compartimento de carga na parte traseira. Os caminhões são movidos por motores a diesel e geralmente possuem uma cabine na frente para acomodar o motorista e os passageiros.",
    localizacao: `Bandeirantes`,
    localImg:`https://s2-autoesporte.glbimg.com/SF5Sqmhnzq0roavfICmTA0sXILw=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/H/sfjhrFQweCTEk8eBfwbA/20c0492-003.jpg`
  },
  {
    id: "3",
    nome: "Plantadeira",
    preco: `4000,00`,
    tipo: "nao-consumivel",
    fornecedor: "Ronaldo",
    descricao: "Uma plantadeira é um implemento agrícola utilizado para o plantio de sementes de forma precisa e eficiente. Ela é projetada para distribuir as sementes em fileiras e na profundidade correta, além de cobri-las com solo para garantir o desenvolvimento adequado das plantas.",
    localizacao: `Praia da Costa`,
    localImg:`https://broto.com.br/media/catalog/product/p/l/plantadeirajd1113--1_5.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=345&width=486`
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
var carregamento = document.querySelector(`.carregamento`)

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

dadoSafra.map((a) => {
  var clone = elementoClone.cloneNode(true);
  clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
  clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
  clone.querySelector(`.itemFoto img`).src = a.localImg
  clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
  clone.querySelector(`.itemLocalizacao`).textContent =
    `Local: ` + a.localizacao;
  clone.querySelector(`.itemPreco`).textContent = `Valor: ` + a.preco + ` R$`;
  area.appendChild(clone);
});
dadoAluguel.map((a) => {
  var clone = elementoClone.cloneNode(true);
  clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
  clone.querySelector(`.itemFoto img`).src = a.localImg
  clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
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
      clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
      clone.querySelector(`.itemFoto img`).src = a.localImg
      clone.querySelector(`.itemLocalizacao`).textContent =
        `Local: ` + a.localizacao;
      clone.querySelector(`.itemPreco`).textContent =
        `Valor: ` + a.preco + ` R$`;
      carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        area.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
    }
  });
  dadoAluguel.map((a) => {
    if (a.nome.includes(valorPesquisa.value)) {
      var clone = elementoClone.cloneNode(true);
      clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
      clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
      clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
      clone.querySelector(`.itemFoto img`).src = a.localImg
      clone.querySelector(`.itemLocalizacao`).textContent =
        `Local: ` + a.localizacao;
      clone.querySelector(`.itemPreco`).textContent =
        `Valor: ` + a.preco + ` R$`;
      
      carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        areaAluguel.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
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
          clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
          clone.querySelector(`.itemFoto img`).src = a.localImg
          clone.querySelector(`.itemLocalizacao`).textContent =
            `Local: ` + a.localizacao;
          clone.querySelector(`.itemPreco`).textContent =
            `Valor: ` + a.preco + ` R$`;
          area.appendChild(clone);

          carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        area.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
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
            clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
            clone.querySelector(`.itemFoto img`).src = a.localImg
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            area.appendChild(clone);

            carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        area.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
          }
        });
        dadoCompra.forEach((a) => {
          if (a.tipo == `nao-consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
            clone.querySelector(`.itemFoto img`).src = a.localImg
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            area.appendChild(clone);

            carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        area.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
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
          clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
          clone.querySelector(`.itemFoto img`).src = a.localImg
          clone.querySelector(`.itemLocalizacao`).textContent =
            `Local: ` + a.localizacao;
          clone.querySelector(`.itemPreco`).textContent =
            `Valor: ` + a.preco + ` R$`;
          

          carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        areaAluguel.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
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
            clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
            clone.querySelector(`.itemFoto img`).src = a.localImg
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            

            carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        areaAluguel.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
          }
        });
        dadoAluguel.forEach((a) => {
          if (a.tipo == `nao-consumivel`) {
            var clone = elementoClone.cloneNode(true);
            clone.querySelector(`.itemNome`).textContent = `Produto: ` + a.nome;
            clone.querySelector(`.itemTipo`).textContent = `Tipo: ` + a.tipo;
            clone.querySelector(`.itemFornecedor`).textContent = `Fornecedor: ` + a.fornecedor;
            clone.querySelector(`.itemFoto img`).src = a.localImg
            clone.querySelector(`.itemLocalizacao`).textContent =
              `Local: ` + a.localizacao;
            clone.querySelector(`.itemPreco`).textContent =
              `Valor: ` + a.preco + ` R$`;
            

            carregamento.classList.remove(`nao-visivel`)
      setTimeout(() => {
        areaAluguel.appendChild(clone);
        carregamento.classList.add(`nao-visivel`)
      }, 800);
          }
        });
      }
    } else if (index == 2) {
      itemLojaAnunciarTela.classList.remove("nao-visivel");
    }
  });
});

fechar.addEventListener("click", function () {
  // itemLojaAnunciarTela.classList.add("nao-visivel");
});
var btnCar = document.querySelectorAll(".btnCar");
btnCar.forEach((a) => {
  a.addEventListener("click", function () {});
});

// var btnCompraDetalhe = document.querySelector('.telaCompraFechar');
// btnCompraDetalhe.addEventListener('click', function () {
//     document.querySelector('.telaCompra').classList.add("nao-visivel");
// });
