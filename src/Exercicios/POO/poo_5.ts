// Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function poo_5 (){
    class Pessoa {
    nome: string
    idade: number
    peso: number
    altura: number

    constructor(nome: string, idade: number, peso: number, altura: number) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    envelhecer(): void {
        if (this.idade < 21) {
            this.altura += 0.5
        }
        this.idade++
    }

    engordar(kg: number): void {
        this.peso += kg
    }

    emagrecer(kg: number): void {
        this.peso -= kg
    }

    crescer(cm: number): void {
        this.altura += cm
    }
}

let nome = prompt("Nome:")
if (nome === null) return
let idade = Number(prompt("Idade:"))
let peso = Number(prompt("Peso (kg):"))
let altura = Number(prompt("Altura (cm):"))

let pessoa = new Pessoa(nome, idade, peso, altura)

alert("Dados iniciais:\nNome: " + pessoa.nome + "\nIdade: " + pessoa.idade + "\nPeso: " + pessoa.peso + " kg\nAltura: " + pessoa.altura + " cm")
pessoa.envelhecer()
alert("Após envelhecer 1 ano:\nIdade: " + pessoa.idade + "\nAltura: " + pessoa.altura + " cm")

pessoa.engordar(5)
alert("Após engordar 5 kg:\nPeso: " + pessoa.peso + " kg")
}