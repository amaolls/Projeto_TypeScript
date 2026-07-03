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

        calculoMedia(): void {
            const media = (this.nota1 + this.nota2) / 2
            
            if (media >= 6) {
                console.log(`Olá ${this.nome}, você está APROVADO com média ${media}.`)
            } else {
                console.log(`Olá ${this.nome}, você está REPROVADO com média ${media}.`)
            }
        }
    }


    const aluno = new Aluno("Amanda", 3, 8)
    aluno.calculoMedia()
}
