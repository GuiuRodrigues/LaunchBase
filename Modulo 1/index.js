// criar um programa que calcula a média
// das grades entre os students e envia 
// mensagens do cálculo da média.
// Se a média for maior que 5, parabenizar a turma.

/*const student01 = 'Guilherme'
const gradestudent01 = 9.3

const student02 = 'Marcos'
const gradestudent02 = 0.5

const student03 = 'Rodrigues'
const gradestudent03 = 4.0




const average = (gradestudent01 + gradestudent02 + gradestudent03)/3

if (average>5){
    console.log(`A grade foi de ${average}. Parabéns`)
}else{
    console.log(`Infelizmente sua grade de ${average}, não foi suficiente`)

}

console.log(average)*/

const classA = [
    {
        name: 'Marcos',
        grade: 8.5, 
    },
    {
        name: 'Jose',
        grade: 10.0, 
    },
    {
        name: 'Maria',
        grade: 9.2, 
    },
    {
        name: ' XUXU',
        grade : 9.0,
    },
]
const classB = [
    {
        name: 'Manoel',
        grade: 8.0, 
    },
    {
        name: 'Lucas',
        grade: 2.0, 
    },
    {
        name: 'Samu',
        grade: 5.0, 
    },
    {
        name: ' James',
        grade : 6.0,
    },
]


function calculateAverage(students){
    let sum =0;
    for ( let i  = 0;  i < students. length;  i++){
        sum =  sum + students[i].grade
     }
    const average  = sum / students.length
    return average
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average,turma){
    
    if (average>5)
    {
        console.log(`A average da turma ${turma} é  ${average}. Parabéns`)
    }
    else
    {
        console.log(`Infelizmente a average ${average}, da  ${turma}, não foi suficiente`)
    }
}
sendMessage(average1,'turmaA')
sendMessage(average2,'turmaB')





