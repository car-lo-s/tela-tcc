var dado = [
    {   
        id:'1',
        nome:'café',
        quantidade:'200',
        tipo:'consumivel',
        fornecedor:'João',
        descricao:'O café é uma bebida amplamente consumida em todo o mundo, feita a partir dos grãos torrados da planta Coffea. Ele é apreciado por seu sabor rico e aroma característico. O café é uma das bebidas mais populares e socialmente significativas, sendo consumido tanto por seu efeito estimulante como por seu sabor.'
    },
    {
        id:'2',
        nome:'açucar',
        quantidade:'50',
        tipo:'consumivel',
        fornecedor:'Carlos',
        descricao:'O açúcar é uma substância doce amplamente utilizada como adoçante em alimentos e bebidas. É um carboidrato simples, também conhecido como sacarose, composto por glicose e frutose. '
    },
    {
        id:'3',
        nome:'leite',
        quantidade:'2000',
        tipo:'consumivel',
        fornecedor:'José',
        descricao:'O leite é um líquido nutritivo e amplamente consumido em todo o mundo. É um produto alimentar obtido dos mamíferos fêmeas, como vacas, cabras, ovelhas e búfalas, após o parto. O leite é uma fonte de nutrientes essenciais, como proteínas, carboidratos, gorduras, vitaminas e minerais, sendo especialmente rico em cálcio.'
    },
    {
        id:'4',
        nome:'trator',
        quantidade:'1',
        tipo:'não-consumivel',
        fornecedor:'Robson',
        descricao:'Um trator é um veículo motorizado projetado para executar uma variedade de tarefas agrícolas e de construção. Ele é especialmente projetado para fornecer tração e potência para puxar ou empurrar implementos agrícolas pesados, como arados, grades, semeadores, colheitadeiras, entre outros.'
    },
    {
        id:'5',
        nome:'caminhão',
        quantidade:'1',
        tipo:'não-consumivel',
        fornecedor:'Edmundo',
        descricao:'Um caminhão é um veículo de grande porte projetado para o transporte de cargas. Ele consiste em um chassi robusto, com rodas e um compartimento de carga na parte traseira. Os caminhões são movidos por motores a diesel e geralmente possuem uma cabine na frente para acomodar o motorista e os passageiros.'
    }
]


////////////////////////////////////////////////////////////////////////////////////
var elementoOriginal = document.querySelector('.exemplo table tbody tr')
var tabela = document.querySelector('.tabela table')
var telaCadastro = document.querySelector('.cadastro')
var telaAlteracao = document.querySelector('.alteracao')
var pai = document.querySelector('#principal')
var cont = 1;
var produto = {
    id:'0',
    nome: " ",
    quantidade: "",
    tipo: "",
    fornecedor: "",
    descrição: ""
  };
////////////////////////////////////////////////////////////////////////////////////
function gerar(){
    dado.map((a)=>{
        var clone = elementoOriginal.cloneNode(true)
        clone.querySelector('.codigo').textContent = a.id
        clone.querySelector('.nome').textContent = a.nome
        clone.querySelector('.fornecedor').textContent = a.fornecedor
        clone.querySelector('.quantidade').textContent = a.quantidade
        clone.querySelector('.tipo').textContent = a.tipo
        pai.appendChild(clone)
        
    })
}
gerar()


////////////////////////////////////////////////////////////////////////////////////
    var btn = document.querySelectorAll('#principal .btn-descricao')
    btn.forEach((botao)=>{
        botao.dataset.desc = cont
        cont++;
    })

    var telaInformacao = document.querySelector('.informacao')

    btn.forEach((a)=>{
        a.addEventListener('click',()=>{
            dado.map((b)=>{
                if(a.dataset.desc == b.id){
                    if(telaInformacao.classList.contains('nao-visivel')){
                        telaInformacao.classList.remove('nao-visivel')
                        telaInformacao.querySelector('#informacao-texto').textContent= b.descricao
                    }
                }
            })
        })
    })
////////////////////////////////////////////////////////////////////////////////////
    
    function infoFechar(){
        telaInformacao.classList.add('nao-visivel')
        telaCadastro.classList.add('nao-visivel')
        telaAlteracao.classList.add('nao-visivel')
        
        
    }

////////////////////////////////////////////////////////////////////////////////////
    
    var btnDel = document.querySelectorAll('#principal .btn-del')
    
    
    var contDel =1
    btnDel.forEach((botao)=>{
        botao.dataset.del = contDel
        contDel++;
    })

   
    
////////////////////////////////////////////////////////////////////////////////////

var tag = document.querySelectorAll('#principal .tag-btn')
var contTag = 1
tag.forEach((a)=>{
    a.dataset.tag = contTag;
    contTag++
})

btnDel.forEach((a)=>{
    a.addEventListener('click',()=>{
        tag.forEach((b)=>{
            if(a.dataset.del == b.dataset.tag){
                b.remove()
            }
        })
    })
})

////////////////////////////////////////////////////////////////////////////////////
function telaCadastrarElement(){
    telaCadastro.classList.remove('nao-visivel')
    telaInformacao.classList.add('nao-visivel')
}
////////////////////////////////////////////////////////////////////////////////////
var btnCadastro = document.querySelector('.btn-cadastro')
btnCadastro.addEventListener('click',(e)=>{
    e.preventDefault()
})

function cadastrarProduto(){
    produto.nome = document.querySelector('#nome').value
    produto.quantidade = document.querySelector('#quantidade').value
    produto.tipo = document.querySelector('#tipo').value
    produto.fornecedor = document.querySelector('#fornecedor').value
    produto.descrição = document.querySelector('#descricao').value
    console.log(dado)
    dado.push(produto)
    var clone = elementoOriginal.cloneNode(true)
        clone.querySelector('.codigo').textContent = produto.id
        clone.querySelector('.nome').textContent = produto.nome
        clone.querySelector('.quantidade').textContent = produto.quantidade
        clone.querySelector('.tipo').textContent = produto.tipo
        clone.querySelector('.fornecedor').textContent = produto.fornecedor
        pai.appendChild(clone)
}
////////////////////////////////////////////////////////////////////////////////////

var Alt = document.querySelectorAll('#principal .btn-alt')
var contAlt = 1
var linhaAlterar;
Alt.forEach((a)=>{
    a.dataset.Alt = contAlt++
})

Alt.forEach((a)=>{
    a.addEventListener('click', function(){
        linhaAlterar = a.dataset.Alt
        telaAlteracao.classList.remove('nao-visivel')
    })
})

function mais(){
    var alteracaoValor = document.querySelector('.alteracaoValor')
    var linha = tabela.rows[linhaAlterar]
    var celula = linha.cells[2]
    var conteudo = parseFloat(celula.textContent)
    alteracaoValor = parseFloat(alteracaoValor.value)
    celula.textContent = alteracaoValor+conteudo
}
function menos(){
    var alteracaoValor = document.querySelector('.alteracaoValor')
    var linha = tabela.rows[linhaAlterar]
    var celula = linha.cells[2]
    var conteudo = parseFloat(celula.textContent)
    alteracaoValor = parseFloat(alteracaoValor.value)
    celula.textContent = conteudo-alteracaoValor
    
    // console.log(alteracaoValor-conteudo)
}