var dadoCompra = [
    {   
        id:'1',
        nome:'cafe',
        preco:`150`,
        tipo:'consumivel',
        fornecedor:'carlos',
        descricao:'teste1 teste teste teste',
        localizacao:`bela aurora`
    },
    {
        id:'2',
        nome:'acucar',
        preco:`150`,
        tipo:'consumivel',
        fornecedor:'carlos',
        descricao:'teste2 teste teste teste',
        localizacao:`bela aurora`
    }
]
var elementoClone = document.querySelector(`.itemCard`)
var area = document.querySelector(`.itemLojaCompra`)
var valorPesquisa = document.querySelector(`.mercadoPesquisa input`)
var pesquisar = document.querySelector(`.pesquisar`)


dadoCompra.map(a=>{
    
        var clone = elementoClone.cloneNode(true)
        clone.querySelector(`.itemNome`).textContent = `Produto: `+a.nome
        clone.querySelector(`.itemTipo`).textContent = `Tipo: `+a.tipo
        clone.querySelector(`.itemPreco`).textContent = `Valor: `+a.preco+` R$` 
        area.appendChild(clone)
    
    
})

function apresentar( nome){
    dadoCompra.map(a=>{
        if(a.nome.includes(nome)){
            var clone = elementoClone.cloneNode(true)
            clone.querySelector(`.itemNome`).textContent = `Produto: `+a.nome
            clone.querySelector(`.itemTipo`).textContent = `Tipo: `+a.tipo
            clone.querySelector(`.itemPreco`).textContent = `Valor: `+a.preco+` R$` 
            area.appendChild(clone)
        }
        
    })
    
}

pesquisar.addEventListener(`click`,()=>{
    var dadoApagar = document.querySelectorAll(`.itemLojaCompra .itemCard`)
    apresentar(valorPesquisa.value)
    dadoApagar.forEach((i)=>{
        i.remove()
    })
   
})