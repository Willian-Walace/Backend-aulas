
let clinica = [];

clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Papagaio");

console.log('Fila de animais na clínica:', clinica);

let atendido1 = clinica.shift();
console.log(`Atendido: ${atendido1}`);
let atendido2 = clinica.shift();
console.log(`Atendido: ${atendido2}`);
let atendido3 = clinica.shift();
console.log(`Atendido: ${atendido3}`);

console.log('Fila final de animais (após atendimentos):', clinica);
