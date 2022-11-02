/**
 * Juros
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let valorbruto = Number(read.question("Digite o valor bruto: ").replace(",","."))
let valorporcentagem = Number(read.question(`Digite o valor do Juros: `).replace(",","."))

//processamento
let valorjuros = valorbruto + (valorporcentagem * valorbruto) / 100

//saida 
console.log(`O valor do Juros = ${valorjuros.toFixed(2)}`)