let timeout;

window.addEventListener('mousemove', function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log(e.x);
    }, 500);
})

//um exemplo de debounce
//define o tempo que um evento pode ser reexecutado
//previne execução initerrupta de evento