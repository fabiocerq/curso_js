for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i + ' > Par')
    } else {
        console.log(i + ' > Impar')
    }
}
console.log('------')
console.log('Solução com While')


let x = 0;

while (x <= 50) {
    if (x % 2 == 0) {
        console.log(x + ' > Par')
    } else {
        console.log(x + ' > Impar')
    }
    x++;
}
