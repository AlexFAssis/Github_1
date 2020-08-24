(function () {
  'use-strict';
  $nomeUsuario = document.getElementById("nomeUsuario")

  if (!$nomeUsuario.value) {
    document.getElementById('formExit').style.display = 'none';
  } else {
    // window.addEventListener("load", function (event) {
    ocultaTipos()
    carregaTipos()
    // })

  }

  function ocultaTipos() {
    let $qtde = document.getElementsByClassName("selectHidden").length
    for (let i = 0; i < $qtde; i++) {
      document.getElementsByClassName("selectHidden")[i].style.display = "none";
    }
  }

  function carregaTipos() {
    let $select = document.getElementsByClassName('selectTipos')
    let $tipoString = document.getElementById('usuarioTipo')
    let $tipo = document.getElementsByClassName("hidden")

    for (let i = 0; i < $tipo.length; i++) {
      let itemSelect = document.createElement("OPTION");

      itemSelect.selected = false;
      itemSelect.value = $tipo[i].value;
      itemSelect.text = $tipo[i].text;

      if ($tipo[i].value == $tipoString.innerHTML) {
        itemSelect.selected = true;
      }

      $select[0].appendChild(itemSelect);
    }
  }

})()