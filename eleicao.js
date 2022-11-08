/**
 * Sistema eleição
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let idade = Number(read.question("Digite a Idade: "))

//status
if(idade < 16) {
    console.log ("PROIBIDO VOTAR")
} else {
    if(idade > 17 && idade < 71) {
    console.log("VOTO OBRIGATORIO") 
} else { 
        console.log("VOTO FACULTATIVO")
}}