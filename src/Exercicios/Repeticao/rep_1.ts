// Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

export function rep_1(): void {
    alert("Programa: soma e conta números até digitar 0")

    let quantidade: number = 0
    let soma: number = 0
    let numero: number = Number(prompt("Digite um número (0 para sair): "))

    while (numero !== 0) {
        quantidade++
        soma += numero
        numero = Number(prompt("Digite outro número (0 para sair): "))
    }

    alert("Quantidade de números digitados: " + quantidade + "\nSoma total: " + soma)
}