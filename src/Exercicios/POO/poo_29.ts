// Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.



export function poo_29 (){

class Obra {
    titulo: string
    autor: string

    constructor(titulo: string, autor: string) {
        this.titulo = titulo
        this.autor = autor
    }

    calcularMulta(dias: number): number {
        return 0
    }

    penalidade(dias: number): string {
        return "Sem penalidade."
    }
}

class LivroFisico extends Obra {
    constructor(titulo: string, autor: string) {
        super(titulo, autor)
    }

    calcularMulta(dias: number): number {
        return dias * 2.50
    }

    penalidade(dias: number): string {
        return "Multa: R$ " + this.calcularMulta(dias).toFixed(2)
    }
}

class ArtigoDigital extends Obra {
    constructor(titulo: string, autor: string) {
        super(titulo, autor)
    }

    calcularMulta(dias: number): number {
        return 0
    }

    penalidade(dias: number): string {
        return "Advertência virtual emitida."
    }
}

let titulo = prompt("Título:")
if(titulo === null) return
let autor = prompt("Autor:")
if(autor === null) return
let tipo = prompt("1 - Livro Físico\n2 - Artigo Digital")
let dias = Number(prompt("Dias de atraso:"))

let obra: Obra
if (tipo === "1") {
    obra = new LivroFisico(titulo, autor)
} else {
    obra = new ArtigoDigital(titulo, autor)
}

alert("Obra: " + obra.titulo + " - " + obra.autor +
      "\nPenalidade: " + obra.penalidade(dias))
}