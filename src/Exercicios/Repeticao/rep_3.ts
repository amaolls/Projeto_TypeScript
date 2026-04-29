// Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function rep_3(): void {
    alert("Cadastro de operários")

    let somaSalarios: number = 0
    let maiorSalario: number = 0
    let nomeMaiorSalario: string = ""
    let qtdMasculino: number = 0
    let qtdFeminino: number = 0
    let qtdTotal: number = 0

    let continuar: string = "S"

    while (continuar === "S" || continuar === "s") {
        let nome_f: string = String (prompt("Nome do operário: "))
        let horas: number = Number(prompt("Horas trabalhadas: "))
        let salarioHora: number = Number(prompt("Salário por hora: "))
        let sexo_f: string = String (prompt("Sexo (M/F): "))

        let salario: number = horas * salarioHora
        qtdTotal++;
        somaSalarios += salario

        if (salario > maiorSalario) {
            maiorSalario = salario
            nomeMaiorSalario = nome_f
        }

        if (sexo_f === "M" || sexo_f === "m") {
            qtdMasculino++
        } else if (sexo_f === "F" || sexo_f === "f") {
            qtdFeminino++
        }

        continuar = String (prompt("Deseja continuar? (S/N): "))
    }

    let percMasculino: number = 0
    let percFeminino: number = 0
    if (qtdTotal > 0) {
        percMasculino = (qtdMasculino / qtdTotal) * 100
        percFeminino = (qtdFeminino / qtdTotal) * 100
    }

    alert(
        "=== RELATÓRIO ===\n\n" +
        "Salário total dos funcionários: R$ " + somaSalarios.toFixed(2) +
        "\nMaior salário: R$ " + maiorSalario.toFixed(2) + " (recebido por " + nomeMaiorSalario + ")" +
        "\n\nNúmero de homens cadastrados: " + qtdMasculino +
        "\nNúmero de mulheres cadastradas: " + qtdFeminino +
        "\n\nPercentual de homens: " + percMasculino.toFixed(1) + "%" +
        "\nPercentual de mulheres: " + percFeminino.toFixed(1) + "%"
    )
}