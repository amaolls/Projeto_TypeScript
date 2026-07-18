// Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function poo_14 (){
class Livro {
    titulo: string
    autor: string
    ano: number
    disponivel: boolean

    constructor(titulo: string, autor: string, ano: number, disponivel: boolean = true) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = disponivel
    }

    emprestar(): void {
        if (this.disponivel) {
            this.disponivel = false
            alert("Livro emprestado com sucesso!")
        } else {
            alert("Livro indisponível!")
        }
    }

    devolver(): void {
        this.disponivel = true
        alert("Livro devolvido!")
    }

    exibir(): string {
        return "Título: " + this.titulo +
               "\nAutor: " + this.autor +
               "\nAno: " + this.ano +
               "\nDisponível: " + (this.disponivel ? "Sim" : "Não")
    }
}

let titulo = prompt("Título do livro:")
if(titulo === null) return
let autor = prompt("Autor:")
if(autor === null) return
let ano = Number(prompt("Ano de publicação:"))

let livro = new Livro(titulo, autor, ano)
alert("Livro cadastrado:\n" + livro.exibir())

let opcao = prompt("1 - Emprestar\n2 - Devolver\n3 - Ver status")
if (opcao === "1") {
    livro.emprestar()
    alert("Status atual:\n" + livro.exibir())
} else if (opcao === "2") {
    livro.devolver()
    alert("Status atual:\n" + livro.exibir())
} else {
    alert("Status:\n" + livro.exibir())
}   
}