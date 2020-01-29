//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados.

const empresa = {
    Nome: 'Rocketseat',
    Cor: 'Roxo',
    Foco: 'Programação',
    Endereco:{
        Rua: 'Rua Guilherme Gembala',
        Número: 260
    }
}



console.log('A empresa',empresa.Nome,'está localizada em',empresa.Endereco.Rua,',',empresa.Endereco.Número)

const skill =[
        { 
             nome: 'C++',
             especialidade: 'Desktop' 
        },

          {
                nome: 'Python',
                especialidade: 'Data Science'
         },

          {
              nome: 'JavaScript', 
                especialidade: 'Web/Mobile'
         }
 
]


const programador={
    nome: 'Marcos',
    idade: 21,
    tecnologias: skill[2]

}
console.log('O usuário',programador.nome,'tem ',programador.idade,'anos e usa a tecnologia',skill[2].nome,'com especialidade em',skill[2].especialidade)