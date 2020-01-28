// Desafio 1 Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = 'Guilherme'
const peso = 15
const altura = 1.72
const sexo = 'F'

const imc = peso/(altura*altura)

if((imc>=30) || !(imc<=29.9) ){
    console.log(`${nome} voçê está acima do peso`)
}else{
    console.log(`${nome} voçê não está acima do peso`)
}