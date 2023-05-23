function crearTabla(event) {
    event.preventDefault();
  
    var numValores = parseInt(document.getElementById('numValores').value);
  
    var tabla = document.getElementById('tabla');
    tabla.innerHTML = '';
  
    for (var i = 0; i < numValores; i++) {
      var fila = document.createElement('tr');
      var celda = document.createElement('td');
      var input = document.createElement('input');
      input.type = 'number';
      input.className = 'valor';
      fila.appendChild(celda);
      celda.appendChild(input);
      tabla.appendChild(fila);
    }
  }
  
  function calcularSuma(event) {
    event.preventDefault();
  
    var valores = document.querySelectorAll('#tabla input');
    var suma = 0;
  
    for (var i = 0; i < valores.length; i++) {
      var valor = parseInt(valores[i].value);
  
      if (!isNaN(valor)) {
        suma += valor;
      }
    }
  
    var resultado = document.getElementById('resultado');
    resultado.innerText = 'La suma es: ' + suma;
  }
  
  var formTabla = document.getElementById('formTabla');
  var formSuma = document.getElementById('formSuma');
  
  formTabla.addEventListener('submit', crearTabla);
  formSuma.addEventListener('submit', calcularSuma);
  