const tenis = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(tenis.test("Marca: Nike"))
console.log(tenis.test("Marca: Adidas"))
console.log(tenis.test("Marca: Puma"))
console.log(tenis.test("Marca: Asics"))
console.log('-----')
console.log(tenis.test("Marca: Nike1")) //true pq Nike aparece corretamente
console.log(tenis.test("Marca: nike"))
console.log(tenis.test("Marc: nike"))
console.log(tenis.test("Marca: "))

