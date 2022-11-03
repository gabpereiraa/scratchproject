/**
 * Churrascometro
 */
//nesse churrascometro iremos calcular quantas carnes, cervejas e regrigerantes termos que comprar
//importar o pacote
const read = require('readline-sync')


//variavel homem
let homens = Number(read.question("Quantos Homens: ").replace(",","."))
//variavel Mulher
let mulheres = Number(read.question("Quantas Mulheres: ").replace(",","."))
//variavel Mulher
let criancas = Number(read.question("Quantas Criancas: ").replace(",","."))

//processamento carne homem - mulher - criança
//Carnes cada homem consome 700g 
let carnehomem = (homens * 0.700)
//Carnes cada mulher consome 4000g 
let carnemulher = (mulheres * 0.400)
//Carnes cada criança consome 250g 
let carnecrianca = (criancas * 0.250)

//processamento carne total = homem + mulher + criança
let carnetotal = Number(carnehomem + carnemulher + carnecrianca)


//processamento cerveja homem - mulher
//Cerveja cada homem consome 12 latinhas 
let cervejahomem = (homens * 12)
//Cerveja cada mulher consome 2 latinhas 
let cervejamulher = (mulheres * 2)

//processamento cerveja total = homem + mulher
let cervejatotal = Number(cervejahomem + cervejamulher)


//processamento refrigerante homem - mulher - criança
//Refrigerante cada homem consome 2 Latinha
let refrihomem = (homens * 2)
//Refrigerante cada mulher consome 3 Latinhas 
let refrimulher = (mulheres * 3)
//Refrigerante cada criança consome 4 Latinhas
let refricrianca = (criancas * 4)

//processamento refri total = homem + mulher + criança
let refritotal = Number(refrihomem + refrimulher + refricrianca)

//saida - total carne - total cerveja - total refrigerante
console.log("_______________________________________")  //espaço
console.log(`Total Carne: ${carnetotal.toFixed(3)} Kg`)
console.log(`Total Cerveja: ${cervejatotal.toFixed(0)} Latinhas`)
console.log(`Total Refrigerante: ${refritotal.toFixed(0)} Latinhas`)

