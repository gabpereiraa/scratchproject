/**
 * De fahrenheit para celsius
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let fahrenheit = Number(read.question("Digite a temperatura em fahrenheit: ").replace(",","."))

//processamento
let celsius = (fahrenheit - 32) / 1.800

//saida 
console.log(`${celsius.toFixed(1)} Graus Celsius`)