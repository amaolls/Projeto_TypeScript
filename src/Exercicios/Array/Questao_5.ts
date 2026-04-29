// Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function Questao_5(): void {
    alert("Organizador de Tarefas Diárias")

    function gerenciar_tarefas(): void {
        let tarefas: string[] = []
        let opcao_t: string = ""

        while (opcao_t !== "4") {
            opcao_t = String (prompt(
                "MENU\n1 - Adicionar tarefa\n2 - Concluir tarefa (remover)\n3 - Exibir pendentes\n4 - Sair"
            ))

            if (opcao_t === "1") {
                let novaTarefa: string | null = prompt("Digite a tarefa:")
                if (novaTarefa !== null && novaTarefa.trim() !== "") {
                    tarefas.push(novaTarefa)
                    alert("Tarefa adicionada.")
                } else {
                    alert("Tarefa inválida.")
                }
            } else if (opcao_t === "2") {
                if (tarefas.length === 0) {
                    alert("Nenhuma tarefa pendente.")
                } else {
                    let lista: string = "Escolha o número da tarefa para concluir:\n"
                    for (let i: number = 0; i < tarefas.length; i++) {
                        lista += (i + 1) + ". " + tarefas[i] + "\n"
                    }
                    let escolha: string | null = prompt(lista)
                    if (escolha !== null) {
                        let indice: number = Number(escolha) - 1
                        if (indice >= 0 && indice < tarefas.length) {
                            tarefas.splice(indice, 1);
                            alert("Tarefa concluída e removida.")
                        } else {
                            alert("Número inválido.")
                        }
                    }
                }
            } else if (opcao_t === "3") {
                if (tarefas.length === 0) {
                    alert("Nenhuma tarefa pendente.")
                } else {
                    let lista: string = "Tarefas pendentes:\n";
                    for (let i: number = 0; i < tarefas.length; i++) {
                        lista += (i + 1) + ". " + tarefas[i] + "\n"
                    }
                    alert(lista)
                }
            } else if (opcao_t === "4") {
                alert("Encerrando organizador de tarefas.")
                return
            } else {
                alert("Opção inválida. Tente novamente.")
            }
        }
    }

    gerenciar_tarefas()
}


