/**
 * De celsius para Réaumur
 */

//importar o pacote
const read = require('readline-sync')

//informação texto
console.log("A escala Réaumur é uma escala de temperatura proposta pelo físico francês René-Antoine Ferchault de Réaumur")
console.log("cujos pontos fixos são o ponto de congelamento da água e seu ponto de ebulição.")

//variaveis
let celsius = Number(read.question("Digite a temperatura em celsius: ").replace(",","."))

//processamento
let reaumur = (celsius * 0.80000)

//saida 
console.log(`${reaumur.toFixed(1)} Graus Réaumur`)