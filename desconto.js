/**
 * Desconto
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let valor = Number(read.question("Digite o valor total: ").replace(",","."))
let valordesconto = Number(read.question(`Digite o Desconto: `).replace(",","."))

//processamento
let resultado = valor - (valordesconto * valor) / 100

//saida 
console.log(`${valor.toFixed(2)} - ${valordesconto.toFixed(0)}% = ${resultado.toFixed(2)}`)