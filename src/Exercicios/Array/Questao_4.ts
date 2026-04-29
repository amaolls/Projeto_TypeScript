// Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

export function Questao_4(): void {
   
    alert("Calculadora de Média do ENEM")
    function calcular_media(notas: number[]): number {
        let soma: number = 0
        for (let i: number = 0; i < notas.length; i++) {
            soma += notas[i]
        }
        let media: number = soma / notas.length
        
        let mediaArredondada: number = Math.round(media * 100) / 100
        return mediaArredondada
    }

    let entrada: string | null = prompt("Digite as notas separadas por vírgula (ex: 7.5,8,6.9):")
    if (entrada === null || entrada.trim() === "") {
        alert("Nenhuma nota fornecida.")
        return
    }
    let partes: string[] = entrada.split(",")
    let notas: number[] = []
    for (let i: number = 0; i < partes.length; i++) {
        let valor: number = Number(partes[i].trim())
        if (!isNaN(valor)) {
            notas.push(valor)
        }
    }
    if (notas.length === 0) {
        alert("Nenhuma nota válida.")
        return
    }
    let media: number = calcular_media(notas)
    alert("Média: " + media.toFixed(2))
}
