let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

function msg(e) { //função criada pq removeEventListener requer uma função que não seja anônima como era antes
    console.log(e);
}

btn1.addEventListener('click', msg); //ao invés de e, poderia ser event, pois é palavra reservada

btn2.addEventListener('click', function(e) { 
    console.log(e);
});