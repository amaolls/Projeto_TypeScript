// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.



export function poo_24 (){

class Tarefa {
    descricao: string
    concluida: boolean

    constructor(descricao: string) {
        this.descricao = descricao
        this.concluida = false
    }

    concluir(): void {
        this.concluida = true
    }
}

class TarefaAcademica extends Tarefa {
    disciplina: string

    constructor(descricao: string, disciplina: string) {
        super(descricao)
        this.disciplina = disciplina
    }
}

class TarefaPessoal extends Tarefa {
    prioridade: number

    constructor(descricao: string, prioridade: number) {
        super(descricao)
        this.prioridade = prioridade
    }
}

let tipo = prompt("1 - Acadêmica\n2 - Pessoal")
let desc = prompt("Descrição:")
if(desc === null) return

if (tipo === "1") {
    let disc = prompt("Disciplina:")
    if(disc === null) return
    let tarefa = new TarefaAcademica(desc, disc)
    alert("Tarefa criada:\n" + tarefa.descricao + " - " + tarefa.disciplina)
    tarefa.concluir()
    alert("Status: " + (tarefa.concluida ? "Concluída" : "Pendente"))
} else {
    let prioridade = Number(prompt("Prioridade (1 a 5):"))
    let tarefa = new TarefaPessoal(desc, prioridade)
    alert("Tarefa criada:\n" + tarefa.descricao + " - Prioridade: " + tarefa.prioridade)
    tarefa.concluir()
    alert("Status: " + (tarefa.concluida ? "Concluída" : "Pendente"))
}
}