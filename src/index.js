import validator from "./validator.js";

const botonn = document.getElementById("button");

let input = document.getElementById("card");

function saveN() {

  let cardN = document.getElementById("card").value;
  //capturar en la variable cardN lo que el usuario digite en el campo input
  if (validator.isValid(cardN)) {
    document.getElementById("form").style.backgroundColor= "green",
    document.getElementById("valid").innerHTML= "   T A R J E T A    V Á L I D A";

  } else {
    document.getElementById("form").style.backgroundColor= "red";
    document.getElementById("valid").innerHTML= "T A R J E T A  -  I N V Á L I D A";
  }
  let card = document.getElementById("card").value;
  //validator.maskify(card)

  document.getElementById("card").value = validator.maskify(card);
}
function justNumber(event) {

  event.preventDefault();
  let codigoKey = event.keyCode;
  let numberCard = String.fromCharCode(codigoKey);
  let valor = parseInt(numberCard);

  if (valor) {
    input.value += valor;
  } else {
    alert("Ingrese solo números");
  }
}
input.addEventListener("keypress", justNumber);
botonn.addEventListener("click", saveN);
