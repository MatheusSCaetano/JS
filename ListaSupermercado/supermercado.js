
var items = [];

document.querySelector('input[type=submit]')
    .addEventListener('click', function () {
        var nomeProduto = document.querySelector('input[name=nomeProduto]');
        var precoProduto = document.querySelector('input[name=valorProduto]');

        //  alert(nomeProduto);
        //  alert(precoProduto);

        items.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

       
        
        
        let listaProdutos = document.querySelector('.lista-produtos');
        let soma =0; 
        listaProdutos.innerHTML = ""; // para limpar 
        items.map(function(val){//loop que recupera cada valor
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML+=`

     <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="preco-produto">R$`+val.valor+`</h3>
        </div>
            `;
        })
        soma = soma.toFixed(2);
        nomeProduto.value = ""; // deixando o input vazio apos cadastrar um produto
        precoProduto.value = "";

        let elementoSoma = document.querySelector('.soma-produtos h2');
        elementoSoma.innerHTML = "Total: R$"+ soma; //atualizando o valor de soma de acordo com os proidutos cadastrados


    });
    document.querySelector('button[name=limpar]')
    .addEventListener('click',()=>{ //utilizando array function
        items=[];
        document.querySelector('.lista-produtos').innerHTML =""; // para limpar 
        document.querySelector('.soma-produtos h2').innerHTML="Total: R$ ";


    });
