// Crie uma função que recebe dois números: início e fim. 
// Depois use um laço para preencher um
// array com o intervalo e imprimir 
// apenas os números que são múltiplos de 3.





export function Questao_9(): void {

    alert("Multiplos de 3 no intervalo de números")
    let inicio: number = Number(prompt("Digite o número inicial: "))
    let fim: number = Number(prompt("Digite o número final: "))


    let intervalo: number[] = []
    for (let i: number = inicio; i <= fim; i++) {
        intervalo.push(i)
    }


    let multiplos: string = "Múltiplos de 3:\n"
    for (let i: number = 0; i < intervalo.length; i++) {
        if (intervalo[i] % 3 === 0) {
            multiplos += intervalo[i] + "\n"
        }
    }

    alert(multiplos)
}