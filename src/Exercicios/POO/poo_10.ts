// // Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// // A. Atributos: Nome, Fome, Saúde e Idade
// // B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// // C. Retornar Nome, Fome, Saúde e Idade

// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

export function poo_10 (){
    class Tamagushi {
    nome: string
    fome: number
    saude: number
    idade: number

    constructor(nome: string, fome: number, saude: number, idade: number) {
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

    // Métodos para alterar
    alterarNome(novoNome: string): void { this.nome = novoNome; }
    alterarFome(novaFome: number): void { this.fome = novaFome; }
    alterarSaude(novaSaude: number): void { this.saude = novaSaude }
    alterarIdade(novaIdade: number): void { this.idade = novaIdade }

    // Métodos para retornar
    retornarNome(): string { return this.nome }
    retornarFome(): number { return this.fome }
    retornarSaude(): number { return this.saude }
    retornarIdade(): number { return this.idade }

    // Campo calculado (Humor)
    humor(): string {
        let media = (this.fome + this.saude) / 2
        if (media >= 8) return "Feliz ;)"
        else if (media >= 5) return "Neutro :|"
        else return "Triste :("
    }
}

let nome = prompt("Nome do bichinho:")
if(nome === null) return
let fome = Number(prompt("Fome (0 a 10):"))
let saude = Number(prompt("Saúde (0 a 10):"))
let idade = Number(prompt("Idade:"))

let bichinho = new Tamagushi(nome, fome, saude, idade)

alert(
    "Dados do Tamagushi:\n" +
    "Nome: " + bichinho.retornarNome() + "\n" +
    "Fome: " + bichinho.retornarFome() + "\n" +
    "Saúde: " + bichinho.retornarSaude() + "\n" +
    "Idade: " + bichinho.retornarIdade() + "\n" +
    "Humor: " + bichinho.humor()
)
}