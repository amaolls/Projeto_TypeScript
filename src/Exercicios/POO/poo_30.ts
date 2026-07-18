// O Sistema de Bilhetagem de Transporte Intermunicipal

// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.


export function poo_30 (){

class Passagem {
    private _nome: string
    private _cpf: string
    private _valorBase: number

    constructor(nome: string, cpf: string, valorBase: number) {
        this._nome = nome
        this._cpf = cpf
        this._valorBase = valorBase
    }

    get nome(): string { return this._nome }
    get cpf(): string { return this._cpf }
    get valorBase(): number { return this._valorBase }

    calcularValor(): number {
        return this._valorBase
    }

    resumo(): string {
        return "Nome: " + this._nome +
               "\nCPF: " + this._cpf +
               "\nValor: R$ " + this.calcularValor().toFixed(2)
    }
}

class PassagemComum extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase)
    }

    calcularValor(): number {
        return this.valorBase
    }
}

class PassagemEstudantil extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase)
    }

    calcularValor(): number {
        return this.valorBase * 0.50
    }
}

let nome = prompt("Nome do passageiro:")
if(nome === null) return
let cpf = prompt("CPF:")
if(cpf === null) return
let valor = Number(prompt("Valor base da passagem:"))
let tipo = prompt("1 - Comum\n2 - Estudante (50%)")

let passagem: Passagem
if (tipo === "2") {
    passagem = new PassagemEstudantil(nome, cpf, valor)
} else {
    passagem = new PassagemComum(nome, cpf, valor)
}

alert("Resumo da passagem:\n" + passagem.resumo())
}