const pontoRegex = /./;
//aceita o que for digitado, exceto quebra de linha
console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("132"))
console.log(pontoRegex.test("asd21"))

console.log('------')

const dRegex = /\d/; 
//semelhante ao conjunto [0-9]
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("132"))
console.log(dRegex.test("asd21"))

console.log('------')

const dRegex2 = /\D/; 
//semelhante ao conjunto [^0-9] > ^ é o não para regex
console.log(dRegex2.test("asd"))
console.log(dRegex2.test(" "))
console.log(dRegex2.test("132"))
console.log(dRegex2.test("asd21"))

console.log('------')

const sRegex = /\s/; 
//aceita espaço vazio, quebra de linha e tab
console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("132"))
console.log(sRegex.test("asd21"))

console.log('------')

const wRegex = /\w/; 
//só alfanuméricos
console.log(wRegex.test("asd"))
console.log(wRegex.test(" "))
console.log(wRegex.test("132"))
console.log(wRegex.test("asd21"))







