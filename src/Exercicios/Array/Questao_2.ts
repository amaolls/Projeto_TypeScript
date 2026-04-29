// Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

export function Questao_2(): void {

    alert("Ler um número indeterminado de notas ou -1 para encerrar")
    let notas: number[] = []
    let nota: number = Number(prompt("Digite uma nota (-1 para encerrar): "))

    while (nota !== -1) {
        notas.push(nota)
        nota = Number(prompt("Digite outra nota (-1 para encerrar): "))
    }

    let quantidade: number = notas.length
    if (quantidade === 0) {
        alert("Nenhuma nota foi informada.")
        return
    }


    let ordemOriginal: string = notas.join(", ")


    let ordemInversa: string = ""
    for (let i: number = quantidade - 1; i >= 0; i--) {
        ordemInversa += notas[i]
        if (i > 0) {
            ordemInversa += ", "
        }
    }


    let soma: number = 0
    for (let i: number = 0; i < quantidade; i++) {
        soma += notas[i]
    }


    let media: number = soma / quantidade


    let acimaMedia: number = 0
    for (let i: number = 0; i < quantidade; i++) {
        if (notas[i] > media) {
            acimaMedia++
        }
    }

    alert(
        " RELATÓRIO DE NOTAS \n\n" +
        "Quantidade de notas: " + quantidade + "\n\n" +
        "Ordem original: " + ordemOriginal + "\n" +
        "Ordem inversa: " + ordemInversa + "\n\n" +
        "Soma: " + soma.toFixed(2) + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Notas acima da média: " + acimaMedia)
}
