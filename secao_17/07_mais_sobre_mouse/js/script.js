let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('mousedown', function() {
    console.log("apertou o botão")
});

//segurar o click não executa infinitamente, diferente do keydown

btn1.addEventListener('mouseup', function() {
    console.log("soltou o botão")
});

btn2.addEventListener('dblclick', function() {
    console.log("apertou duas vezes")
});

btn2.addEventListener('contextmenu', function(e) { //contextmenu é o menu do botão direito
    
    e.preventDefault(); //ignora abertura do menu, portanto funciona como evento de clique do botão direito
    console.log("botão direito")

});