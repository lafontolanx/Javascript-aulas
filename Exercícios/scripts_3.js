/* Celsius em Fahrenheit

Crie um função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para a outra.

C = (F - 32) * 5/9

F = (C * 9/5) + 32

*/

let degree = '70C'

function degreeTransform(value){
    const celsiusExist = value.toUpperCase().includes('C')
    const fahrenheitExist = value.toUpperCase().includes('F')

    // Fluxo de erro
    if(!celsiusExist && !fahrenheitExist){
        console.log('Grau de medida inválido!')
    }
    else{
        valueTransform = 0

        // Fluxo ideal C -> F
        if(celsiusExist){
            value = Number(value.toUpperCase().replace("C",""))
            valueTransform = (value * (9/5)) + 32

            console.log(valueTransform.toFixed(2) + ' F')
        }
        // Fluxo alternativo F -> C
        else if(fahrenheitExist){
            value = Number(value.toUpperCase().replace("F",""))
            valueTransform = (value - 32) * 5/9

            console.log(valueTransform.toFixed(2) + ' C')
        }
    }
}

degreeTransform(degree)





