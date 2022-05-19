/* Sistema de gastos familiar 

Crie um objeto que possuirá duas propriedades, ambas do 
tipo Array:

    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está
com saldo positivo ou negativo, seguido do valor do saldo.

*/
 
let family = {
    revenue: [2000, 4000],
    expense: [150, 180, 400, 1000]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value 
    }

    return total
}

function calc(){

    const sumRevenue = sum(family.revenue)
    const sumExpense = sum(family.expense)

    const total = sumRevenue - sumExpense

    let message = 'Saldo negativo! :('

    if(total >= 0){
        message = 'Saldo positivo! :)'
    }

    console.log(message,'\nSaldo:', total)
}

calc()






