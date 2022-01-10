let input = document.querySelector('#input1');

input1.addEventListener("focus", function() {
    console.log("entrou no input")
});

input.addEventListener("blur", function() {
    console.log("saiu do input")
});

//focus serve pra quando algo está selecionado, blue quando é deselecionado