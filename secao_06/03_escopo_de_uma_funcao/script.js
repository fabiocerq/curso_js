let y = 10;

function  imprimir() {
    let y = 150;

    console.log(y);    
}

imprimir();

console.log(y);

// os y saem com valor diferente porque o escopo da função funciona independente do escopo geral
// então o 150 é impresso primeiro, visto que a função foi invocada primeiro