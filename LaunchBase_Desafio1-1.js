// Desafio 1-1 Crie um programa para calcular a aposentadoria de uma pessoa.

const nome = 'Guilherme'
const idade = 60
const contribuicao = 35
const sexo = 'M'


const tempContribuicao = idade + contribuicao

const homenPodeAposentar = sexo =='M' && contribuicao >= 35 && tempContribuicao >= 95
const mulherPodeAposentar = sexo =='F' && contribuicao >= 30 && tempContribuicao >= 85

if(homenPodeAposentar || mulherPodeAposentar){
    console.log(`${nome}, você poderá se aposentar!`)

}else{
    console.log(`${nome}, você não poderá se aposentar!`)
}