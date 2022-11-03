/**
 * Cálculo da Media com 3 notas 
 */

//importar o pacote
const read = require('readline-sync')
const colors = require('colors')
console.log("===== Cálculo da Média =====")

//variaveis
let nome = read.question('Digite o Seu Nome: ')
console.log(`Aluno: ${nome}`)
let nota1 = Number(read.question("Digite a Nota1: ").replace(",","."))
let nota2 = Number(read.question("Digite a Nota2: ").replace(",","."))
let nota3 = Number(read.question("Digite a Nota2: ").replace(",","."))

//processamento
let media = (nota1 + nota2 + nota3) / 3

//saida 
console.log(`Média: ${media.toFixed(1)}`)

//status
if(media < 2.1) {
    console.log (`${nome} está REPROVADO`.red)
} else { if(media > 2.0 && media < 5.0 ) {
    console.log (`${nome} está de RECUPERAÇÃO`.blue)
} else {
    console.log(`${nome} está APROVADO`.green)
}}
