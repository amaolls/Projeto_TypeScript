// Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

export function Questao_6(): void {

    alert("Armazena 15 nomes de pessoas")
    let nomes: string[] = []


    for (let i: number = 1; i <= 15; i++) {
        let nome: string | null = prompt("Digite o " + i + "º nome:")
        if (nome !== null) {
            nomes.push(nome)
        } else {
            nomes.push("")
        }
    }


    let original: string = "Ordem original:\n" + nomes.join("\n")
    alert(original)


    nomes.sort()


    let ordenado: string = "Ordem alfabética:\n" + nomes.join("\n")
    alert(ordenado)
}
