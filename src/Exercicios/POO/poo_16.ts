// Herança Polimorfismo Encapsulamento
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. Mamíferos têm tipo de
// alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.


export function poo_16 (){
class Animal {
    nome: string
    especie: string
    idade: number

    constructor(nome: string, especie: string, idade: number) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }

    emitirSom(): string {
        return "Som genérico"
    }
}

class Mamifero extends Animal {
    alimentacao: string

    constructor(nome: string, especie: string, idade: number, alimentacao: string) {
        super(nome, especie, idade)
        this.alimentacao = alimentacao
    }

    emitirSom(): string {
        return "Som de mamífero (ex: rugido)"
    }
}

class Ave extends Animal {
    migratoria: boolean;

    constructor(nome: string, especie: string, idade: number, migratoria: boolean) {
        super(nome, especie, idade)
        this.migratoria = migratoria
    }

    emitirSom(): string {
        return "Som de ave (ex: canto)"
    }
}

let leao = new Mamifero("Leão", "Panthera leo", 5, "carnívoro")
let papagaio = new Ave("Papagaio", "Amazona", 3, false)

alert(leao.nome + " faz: " + leao.emitirSom())
alert(papagaio.nome + " faz: " + papagaio.emitirSom())
}