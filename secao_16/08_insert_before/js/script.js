let novoElemento = document.createElement('p');
let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);

let texto = document.createTextNode("Texto de exemplo");

novoElemento.appendChild(texto);
