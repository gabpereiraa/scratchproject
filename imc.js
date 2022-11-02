/**
 * Calculadora IMC
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let valorpeso = Number(read.question("Digite o Peso: ").replace(",","."))
let valoraltura = Number(read.question(`Digite a Altura: `).replace(",","."))

//processamento
let valorimc = valorpeso / (valoraltura * valoraltura)

//saida 
console.log (`O valor do IMC = ${valorimc.toFixed(2)}`)

//status
if(valorimc < 18.6) {
    console.log ("Abaixo do peso")
} else {
    if(valorimc > 16.7 && valorimc < 25.0) 
    {
       console.log ("Peso Ideal")}
   else {
        if(valorimc > 24.9 && valorimc < 30.0) {
            console.log ("Levemente acima do Peso")
        } else {
            if(valorimc > 29.9 && valorimc < 35.0) {
                console.log ("Obesidade Grau I")
            } else {
                if(valorimc > 34.9 && valorimc < 40.0) {
                    console.log ("Obesidade Grau II")}  
                 else {  
                    if(valorimc > 39.9) {
                        console.log ("Obesidade Grau III")
                    }}}}}}