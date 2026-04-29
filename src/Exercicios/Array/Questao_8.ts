// Boletim Híbrido
// 1. Crie um array chamado notasSemestre que possa receber number ou a string &quot;N.A&quot; (Não
// Avaliado).
// 2. Insira os valores: 8.5, 10, &quot;N.A&quot;, 7.2.
// 3. Crie uma lógica que percorra o array e:
//  Se for um número, imprima: &quot;Nota: [valor]&quot;.
//  Se for &quot;N.A&quot;, imprima: &quot;O aluno não realizou a prova&quot;.

export function Questao_8(): void {
    alert("Boletim Híbrido")


    let notasSemestre: (number | string)[] = []


    notasSemestre.push(8.5)
    notasSemestre.push(10)
    notasSemestre.push("N.A")
    notasSemestre.push(7.2)

    let resultado: string = ""
    for (let i: number = 0; i < notasSemestre.length; i++) {
        let elemento: number | string = notasSemestre[i]
        if (elemento === "N.A") {
            resultado += "O aluno não realizou a prova\n"
        } else {
            resultado += "Nota: " + elemento + "\n"
        }
    }

    alert(resultado)
}