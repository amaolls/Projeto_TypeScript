// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

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
