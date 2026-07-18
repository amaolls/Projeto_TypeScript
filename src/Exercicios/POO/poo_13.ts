// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado ou
// reprovado.

export function poo_13() {
class Aluno {
    nome: string
    nota1: number
    nota2: number

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2
    }

    situacao(): string {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado"
    }
}

let nome = prompt("Nome do aluno:")
if(nome === null) return
let n1 = Number(prompt("Nota 1:"))
let n2 = Number(prompt("Nota 2:"))

let aluno = new Aluno(nome, n1, n2)
alert("Aluno: " + aluno.nome +
      "\nMédia: " + aluno.calcularMedia().toFixed(1) +
      "\nSituação: " + aluno.situacao())
}
