idLinha()

function idLinha(id, model) {
  var $id = document.getElementsByClassName('classId');
  var $descricao = document.getElementsByClassName('classDesc');
  var $formPopup = document.getElementById('formId');
  var $descPopUp = document.getElementById('descTituloPopUp')
  var x = ''
  var y = ''

  switch (model) {
    case 'categoria':
    case 'receita':
      x = 'a'
      break
    case 'imposto':
    case 'insumo':
    case 'produto':
    case 'tipo de imposto':
    case 'usuário':
      x = 'o'
      break
    case 'venda':
    case 'compra':
    case 'receita por dia':
      x = 'a'
      y = 'de'
      break
  }

  for (let i = 0; i < $id.length; i++) {
    if ($id[i].innerText == id) {
      var id = $id[i].innerText;
      $descPopUp.innerText = `Deseja excluir ${x} ${model} ${y} ${$descricao[i].innerText}?`

      if (model == 'receita por dia') {
        model = 'receitaPorDia'
      }

      if (model == 'tipo de imposto') {
        model = 'tipoImposto'
      }

      if (model == 'usuário') {
        model = 'usuario'
      }

      $formPopup.action = `/${model}/deletar/${id}`
      break
    }
  }

}