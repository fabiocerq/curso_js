window.addEventListener('load', function(){
    alert("Assine os nossos termos de uso para seguir")
})

window.addEventListener('beforeunload', function(e){
    event.returnValue = null;
})

//leva em consideração o carregamento da página, tanto de entrada, como saída