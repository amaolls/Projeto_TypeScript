// Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.


export function Questao_3(): void {

    alert("Gerador de Lista de Compras Personalizada")
    function gerar_lista_compras(): void {
        let lista: string[] = []
        let opcao_l: string = ""

        while (opcao_l !== "5") {
            opcao_l = String (prompt(
                "MENU\n1 - Adicionar itens\n2 - Listar itens\n3 - Quantidade de itens\n4 - Remover item\n5 - Sair"
            ))

            if (opcao_l === "1") {

                let continuar: boolean = true
                while (continuar) {
                    let nomeItem: string | null = prompt("Nome do item (ou 'fim' para voltar ao menu):")
                    if (nomeItem === null || nomeItem.toLowerCase() === "fim") {
                        continuar = false
                    } else {
                        let quantidade: number = Number(prompt("Quantidade:"))
                        lista.push(nomeItem + " - " + quantidade)
                    }
                }
            } else if (opcao_l === "2") {

                if (lista.length === 0) {
                    alert("Lista vazia.")
                } else {
                    let texto: string = "Lista de compras:\n";
                    for (let i: number = 0; i < lista.length; i++) {
                        texto += (i + 1) + ". " + lista[i] + "\n"
                    }
                    alert(texto)
                }
            } else if (opcao_l === "3") {

                alert("Total de itens na lista: " + lista.length)
            } else if (opcao_l === "4") {

                if (lista.length === 0) {
                    alert("Lista vazia, nada a remover.")
                } else {
                    let texto: string = "Escolha o número do item para remover:\n";
                    for (let i: number = 0; i < lista.length; i++) {
                        texto += (i + 1) + ". " + lista[i] + "\n"
                    }
                    let num: string | null = prompt(texto)
                    if (num !== null) {
                        let indice: number = Number(num) - 1
                        if (indice >= 0 && indice < lista.length) {
                            lista.splice(indice, 1)
                            alert("Item removido.")
                        } else {
                            alert("Número inválido.")
                        }
                    }
                }
            } else if (opcao_l === "5") {
                alert("Encerrando lista de compras.")
                return
            } else {
                alert("Opção inválida. Tente novamente.")
            }
        }
    }

    gerar_lista_compras()
}

