// ESTRUTURAS DE REPETIÇÃO

// FOR

// break - para a execução do loop
// continue - pula a execução do momento

console.log("For usando CONTINUE se i for 4")
for(i = 0; i <= 10; i++){
    if(i==4){
        continue
    }
    console.log(i)
}

console.log("For usando BREAK se i for 4")
for(i = 0; i <= 10; i++){
    if(i==4){
        break
    }
    console.log(i)
}

// WHILE

// Usamos normalmente quando não sabemos o momento exato da parada

console.log("While")
let j=0;
while(j < 10){
    console.log(j)

    j++
}

// FOR...OF

console.log("FOR...OF")

let nome = 'Laura'
let names = ['Laura', 'Pedro', 'Alice']

for(let char of nome){
    console.log(char)

}

for(let name of names){
    console.log(name)
}

// FOR...IN

console.log("FOR...IN")

let Person = {
    name: 'Laura',
    age: 21,
    color: 'Purple'
}

for(let Property in Person){
    console.log(Property)
    console.log(Person[Property])
}



