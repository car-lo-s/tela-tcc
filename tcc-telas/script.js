var dado = [
    {   
        id:'1',
        nome:'cafe',
        quantidade:'200',
        tipo:'consumivel',
        fornecedor:'carlos',
        descricao:'teste1 teste teste teste'
    },
    {
        id:'2',
        nome:'açucar',
        quantidade:'50',
        tipo:'consumivel',
        fornecedor:'carlos',
        descricao:'teste2 teste teste teste'
    },
    {
        id:'3',
        nome:'leite',
        quantidade:'2000',
        tipo:'consumivel',
        fornecedor:'carlos',
        descricao:'teste3 teste teste teste'
    },
    {
        id:'4',
        nome:'trator',
        quantidade:'1',
        tipo:'não-consumivel',
        fornecedor:'renato',
        descricao:'teste4 teste teste teste'
    },
    {
        id:'5',
        nome:'trator',
        quantidade:'1',
        tipo:'não-consumivel',
        fornecedor:'renato',
        descricao:'teste4 teste teste teste'
    }
]


////////////////////////////////////////////////////////////////////////////////////
var elementoOriginal = document.querySelector('.exemplo table tbody tr')
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
var alteracaoValor = document.querySelector('.alteracaoValor')
var Alt = document.querySelectorAll('#principal .btn-alt')
var contAlt = 1
Alt.forEach((a)=>{
    a.dataset.Alt = contAlt++
})
function mais(a,b){
    a = parseFloat(a.textContent)
    b = parseFloat(b)

    alert(a+b)
    
    return 0;
}
Alt.forEach((a)=>{
    a.addEventListener('click',()=>{
        tag.forEach((b)=>{
            if(a.dataset.Alt == b.dataset.tag){
               mais(b.cells[2],alteracaoValor)
            }
        })
    })
})
