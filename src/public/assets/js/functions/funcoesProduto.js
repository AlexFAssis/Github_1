let precoProduto = [];

//Edição

'use-strict';

$(function () {
  $('#preco').maskMoney();
})

let $controle = document.getElementById('controle');

if ($controle) {
  ocultarCampos()
  carregaReceitas()
}

function ocultarCampos() {
  let $qtde = document.getElementsByClassName("hidden").length
  for (let i = 0; i < $qtde; i++) {
    document.getElementsByClassName("hidden")[i].style.display = "none";
  }
}

function carregaReceitas() {
  let $select = document.getElementsByClassName('selectReceitas')
  let $receitaPoduto = document.getElementById('receitaPoduto').innerHTML;
  // let $precoPoduto = document.getElementById('precoReceita').innerHTML;
  let $receitasHidden = document.getElementsByClassName('receitasHidden')
  // let $preco = document.getElementById('preco').value;
  // document.getElementById('preco').value = $preco.replace(/\./, ',')
  for (let i = 0; i < $receitasHidden.length; i++) {
    let itemSelect = document.createElement("OPTION");

    itemSelect.selected = false;
    itemSelect.value = $receitasHidden[i].value;
    itemSelect.text = $receitasHidden[i].text;

    if ($receitasHidden[i].value == $receitaPoduto) {
      itemSelect.selected = true;
    }

    $select[0].appendChild(itemSelect);
  }

}

let $precoNumber = document.getElementById('preco')

if ($precoNumber) {
  // for (let i = 0; i < $precoNumber.length; i++) {
  precoProduto.push(parseFloat($precoNumber.value).toFixed(2));
  document.getElementById('preco').value = precoProduto[0].replace(/\./, ',');
  // }
}

//Listagem
let $precoString = document.getElementsByClassName('preco');
if ($precoString) {
  for (let i = 0; i < $precoString.length; i++) {
    precoProduto.push(parseFloat($precoString[i].innerHTML.replace(/R\$/, '')).toFixed(2))
    $precoString[i].innerHTML = 'R$' + precoProduto[i].replace(/\./, ',');
  }
}