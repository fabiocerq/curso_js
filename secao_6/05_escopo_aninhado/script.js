let a = 10; // a  do escopo global

function multiplicar (x,y) {
    let a = x * y; // a  do escopo da função

    if (a > 10) { 
        let a = 0; // a  do escopo if
        a++;
        console.log(a); 
    }
    console.log(a);
}

console.log(a);

multiplicar(3,7)