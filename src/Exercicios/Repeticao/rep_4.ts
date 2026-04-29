// Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

export function rep_4(): void {
    alert("Contador de pares e ímpares (-1 para sair)")

    let QPares: number = 0
    let QImpares: number = 0
    let X: number = Number(prompt("Digite um número (-1 para encerrar): "))

    while (X !== -1) {
        if (X % 2 === 0) {
            QPares++
        } else {
            QImpares++
        }
        X = Number(prompt("Digite outro número (-1 para encerrar): "))
    }

    alert("Quantidade de pares: " + QPares + "\nQuantidade de ímpares: " + QImpares)
}