// Controle de Frequência do Refeitório do IFS

// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos.

export function poo_17 (){
class AlunoFrequencia {
    nome: string
    matricula: string
    presencas: number
    faltas: number

    constructor(nome: string, matricula: string) {
        this.nome = nome
        this.matricula = matricula
        this.presencas = 0
        this.faltas = 0
    }

    registrarPresenca(): void {
        this.presencas++
    }

    registrarFalta(): void {
        this.faltas++
    }

    resumo(): string {
        return "Aluno: " + this.nome +
               "\nMatrícula: " + this.matricula +
               "\nPresenças: " + this.presencas +
               "\nFaltas: " + this.faltas
    }
}

let nome = prompt("Nome do aluno:")
if(nome === null) return
let mat = prompt("Matrícula:")
if(mat === null) return
let aluno = new AlunoFrequencia(nome, mat)

for (let i = 1; i <= 5; i++) {
    let status = prompt("Dia " + i + " - Presente? (S/N)")
    if(status === null) return
    if (status.toUpperCase() === "S") {
        aluno.registrarPresenca()
    } else {
        aluno.registrarFalta()
    }
}

alert("Relatório de frequência:\n" + aluno.resumo())
}