// Crie um programa que receba um número e informe se ele é positivo, negativo ou zero.


export function Questao_1(): any{
    let val: number = Number(prompt("Informe um numero: "))

    if (val > 0){
        alert("Número Positivo!")
    } else if (val < 0){
        alert("Número Negativo!")
    } else{
        alert("Número Zero!")
    }
}
