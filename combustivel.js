/**
 * Cálculo do Combustivel
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let valorcombustivel = Number(read.question("Digite o Valor do Combustivel: ").replace(",","."))
let valoralcool = Number(read.question("Digite o Valor do Alcool: ").replace(",","."))

//processamento - saida - status
if ((valoralcool / valorcombustivel) < 0.71 ){
   console.log ("MELHOR O ALCOOL")
} else {
    console.log ("MELHOR A GASOLINA")
}
