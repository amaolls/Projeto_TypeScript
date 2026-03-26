// Crie uma função que receba um número e retorne se ele é par ou ímpar.

let numero: number = Number(prompt("Informe um numero: "))

function impar_Par(valor:number){
    if(valor % 2 === 0){
        alert("Número "+valor+" é Par.")
    } else{
       alert("Número "+valor+" é Ímpar.") 
    }
}

impar_Par(numero)