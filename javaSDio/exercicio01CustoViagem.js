///let numero =1987;
//const pi = 3.14;
//console.log('Olá mundo.');
let distancia =  100;
let kmPorLitro = 15;
let precoPorLitro = 5.63;
let quantidadeDeCombustivel = distancia / kmPorLitro;
quantidadeDeCombustivel *= precoPorLitro;

console.log('o valor gasto na viagem:',quantidadeDeCombustivel.toFixed(2));