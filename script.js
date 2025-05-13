

function suma() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
  var resultado = parseInt(numero1)+parseInt(numero2);
  document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
}

function resta() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
  var resultado = parseInt(numero1)-parseInt(numero2);
  document.getElementById("resultado").innerHTML = "El resultado de la restaes: " + resultado;
}

function multiplicar() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
  var resultado = parseInt(numero1)*parseInt(numero2);
  document.getElementById("resultado").innerHTML = "El resultado de la multiplicacion es: " + resultado;
}

function dividir() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
  var resultado = parseInt(numero1)/parseInt(numero2);
  document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
}