//para usar evento de telca, deve ser associado a window

window.addEventListener('keydown', function(e) {
    if (e.key =='q') {
        console.log("Apertou a tecla Q")
    } else if (e.key =='Enter') {
        console.log("apertou enter")
    }
}); 

//executado infinitamente eqnt tecla é segurada

//usar keyup previne isso, portanto melhor quando algo exigir resposta com tecla

window.addEventListener('keyup', function(e) {
    if (e.key =='i') 
        console.log("Apertou a tecla i")

});
