let elemento = document.querySelector('#titulo-principal');

setTimeout(function() {
    elemento.style.color = 'red'; //sobrescreve o CSS
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px';
}, 1000);



