let x = 17;
let divisoes = 0;

for (let i = 1; i <= x; i++) {
    if(x%i==0) {
        divisoes++;
    }
}

if (divisoes == 2) {
    console.log(`${x} é Primo`)
} else {
    console.log(`${x} não é Primo`)
}

