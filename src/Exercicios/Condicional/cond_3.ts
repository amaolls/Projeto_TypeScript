// Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case
export function cond_3() {
    let P_entrada: number = Number(prompt("Digite o primeiro número: "))
    let S_entrada: number = Number(prompt("Digite o segundo número: "))
    let opcao: number = Number(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"))
    let resultado: number
    let operacaoNome: string

    switch (opcao) {
        case 1:
            resultado = P_entrada + S_entrada
            operacaoNome = "soma"
            break;
        case 2:
            resultado = P_entrada - S_entrada
            operacaoNome = "subtração"
            break;
        case 3:
            resultado = P_entrada * S_entrada
            operacaoNome = "multiplicação"
            break;
        case 4:
            resultado = P_entrada / S_entrada
            operacaoNome = "divisão"
            break;
        default:
            return
    }

    alert(`Resultado da ${operacaoNome}: ${P_entrada} e ${S_entrada} = ${resultado}`)
}   

