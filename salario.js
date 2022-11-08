/**
 * Calculo Salarial
 */

//importar o pacote
const read = require('readline-sync')

let remuneracao = Number(read.question("Digite a Remuneracao pretendida: ").replace(",","."))

let reservaremuneracao = (remuneracao - (remuneracao * 70) / 100)
let reservainvestimento = (remuneracao - (remuneracao * 80) / 100)

console.log("-----------------------------")
console.log (`A Reserva da Remuneracao  = ${reservaremuneracao.toFixed(2)}`)
console.log (`A Reserva para Investimentos  = ${reservainvestimento.toFixed(2)}`)
console.log("-----------------------------")
let custooperacional = Number(read.question("Digite o Custo Operacional: ").replace(",","."))
let cargahoraria = Number(read.question("Digite a Carga Horaria: ").replace(",","."))

let horatecnica = (remuneracao +(reservaremuneracao +(reservainvestimento + custooperacional))) / cargahoraria
console.log("-----------------------------")
console.log (`A Reserva da Remuneracao  = ${reservaremuneracao.toFixed(2)}`)
console.log (`A Reserva para Investimentos  = ${reservainvestimento.toFixed(2)}`)
console.log (`A Hora Tecnica = ${horatecnica.toFixed(2)}`)
console.log("-----------------------------")