function invertirTexto() {
    var texto = document.getElementById("inputText").value;
    var textoInvertido = texto.split('').reverse().join('');
    document.getElementById("resultado").innerHTML = textoInvertido;
  }