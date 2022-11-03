/**
 * Ponto de venda
 */
// no ponto de venda irá ter 
// TOTAL - DESCONTO - TOTAL COM DESCONTO - VALOR PAGO - TROCO

//importar o pacote
const read = require('readline-sync')

//variavel valor total 
let valortotal = Number(read.question("Digite o valor total da compra: R$ ").replace(",","."))
//espaço depois da variavel
console.log("______________________________________________")
//saida valor total
console.log(`Valor Total: R$ ${valortotal.toFixed(2)}`)

//espaço depois da saida
console.log("______________________________________________")
//variavel desconto
let desconto = Number(read.question("Digite o Desconto: ").replace(",","."))
//espaço depois da variavel
console.log("______________________________________________")

//saida desconto
console.log(` ${desconto.toFixed(1)} % de desconto`)
//espaço depois da saida
console.log("______________________________________________")

//processamento valor total - porcentagem de desconto
let valordesconto = valortotal - (valortotal * desconto) / 100
//saida de valor total -  desconto - valor com desconto
console.log(`Valor Total: R$ ${valortotal.toFixed(2)}
Desconto: ${desconto.toFixed(1)} %
Valor com Desconto: R$ ${valordesconto.toFixed(2)}`)
//espaço depois da saida
console.log("______________________________________________")

//variavel valor pago
let valorpago = Number(read.question("Digite o valor pago: R$ "))
//espaço depois da variavel
console.log("______________________________________________")
//processamento do troco
let troco = (valorpago - valordesconto)
//saida de valor total -  desconto - valor com desconto - valor pago - troco - mensagem
console.log(`Valor Total: R$ ${valortotal.toFixed(2)}
Desconto: ${desconto.toFixed(1)} %
Valor com Desconto: R$ ${valordesconto.toFixed(2)}
Troco: R$ ${troco.toFixed(2)}
VOLTE SEMPRE`)
