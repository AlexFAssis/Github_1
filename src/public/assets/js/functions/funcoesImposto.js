// (function () {
'use strict';

$(function () {
  $('#vl').maskMoney();
})

// let $datas = document.getElementsByClassName('dataFormatada')
// if ($datas) {
//   for (let i = 0; i < $datas.length; i++) {
//     $datas[i].innerText = formataData($datas[i].innerText)
//   }
// }

flatpickr('.flatpickr', {
  dateFormat: 'd/m/Y',
})

let $qtde = document.getElementById('qtde')
let $valor = document.getElementById('vl')

if ($qtde) {
  $qtde.addEventListener('blur', calculaTotal)
}

if ($valor) {
  $valor.addEventListener('blur', calculaTotal)
  // casasDecimais()
}


//Cadastro
function calculaTotal() {
  let $valorTotal = document.getElementById('vlTotal')
  let valorTotal = 0;
  let valorAux1;
  let valorAux2;
  let valorAux3;

  valorAux1 = $valor.value;
  valorAux2 = valorAux1.replace(/\./g, '');
  valorAux3 = valorAux2.replace(/,/, '.');
  valorTotal = $qtde.value * parseFloat(valorAux3);

  return $valorTotal.value = valorTotal.toFixed(2);
}

// })()

//Listagem
// function formataData(data) {
//   let dia = data.substr(8, 2)
//   let mes = buscaMes(data.substr(4, 3))
//   let ano = data.substr(11, 4)

//   return dia + '/' + mes + '/' + ano;
// }

// function buscaMes(mesStr) {
//   let mes = 0

//   switch (mesStr) {
//     case 'Jan':
//       mes = 1
//       break;
//     case 'Feb':
//       mes = 2
//       break;
//     case 'Mar':
//       mes = 3
//       break;
//     case 'Apr':
//       mes = 4
//       break;
//     case 'May':
//       mes = 5
//       break;
//     case 'Jun':
//       mes = 6
//       break;
//     case 'Jul':
//       mes = 7
//       break;
//     case 'Aug':
//       mes = 8
//       break;
//     case 'Sep':
//       mes = 9
//       break;
//     case 'Oct':
//       mes = 10
//       break;
//     case 'Nov':
//       mes = 11
//       break;
//     case 'Dec':
//       mes = 12
//       break;
//   }

//   return mes = mes < 10 ? '0' + mes : mes;;
// }

let $precoString = document.getElementsByClassName('preco');
if ($precoString) {
  let precoProduto = [];

  for (let i = 0; i < $precoString.length; i++) {
    precoProduto.push(parseFloat($precoString[i].innerHTML.replace(/R\$/, '')).toFixed(2))
    $precoString[i].innerHTML = 'R$' + precoProduto[i].replace(/\./, ',');
  }
}

//Edição
// function casasDecimais() {
//   let $valor = document.getElementById('vl')
//   let valor = 'vl'
//   let $valorTotal = document.getElementById('vlTotal')
//   let valorTotal = 'vl'

//   formataNumeros(valor, $valor)
//   formataNumeros(valorTotal, $valorTotal)

//   function formataNumeros(seletor, campo) {
//     let vetAux = [];
//     vetAux.push(parseFloat(campo.value).toFixed(2));
//     document.getElementById(seletor).value = vetAux[0].replace(/\./, ',');
//   }
// }
