/**
 * Cálculo da Media de 2 notas 
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

//processamento
let media = (nota1 + nota2) / 2

//saida 
console.log(`Média: ${media.toFixed(1)}`)

//status
if(media < 5) {
    console.log ("Aluno REPROVADO".red)
} else {
    console.log("Aluno APROVADO".blue)
}
