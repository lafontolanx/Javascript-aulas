/* Transformar notas escolares 

Crie um algorítmo que transforme as notas do sistema
numérico para um sistema de notas em caracteres tipo A B C

- de 90 para cima - A
- entre 80 - 89   - B
- entre 70 - 79   - C
- entre 60 - 69   - D
- menor que 60    - F

*/

function getScore(nota){

    let notaA = (nota >= 90 && nota <= 100)
    let notaB = (nota >= 80 && nota <= 89)
    let notaC = (nota >= 70 && nota <= 79)
    let notaD = (nota >= 60 && nota <= 69)
    let notaF = (nota < 60 && nota >=0)

    let letra

    if(notaA){
        letra = 'A'
    }
    else if(notaB){
        letra = 'B'
    }
    else if(notaC){
        letra = 'C'
    }
    else if(notaD){
        letra = 'D'
    }
    else if(notaF){
        letra = 'F'
    }
    else{
        letra = 'Nota inválida'
    }

    return letra
}

console.log(getScore(200))
console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore(81))
