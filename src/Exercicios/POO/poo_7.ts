// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function poo_7 (){
    class Funcionario {
    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    aplicarAumento(percentual: number): void {
        this.salario += this.salario * (percentual / 100)
    }

    exibir(): string {
        return "Nome: " + this.nome + "\nCargo: " + this.cargo + "\nSalário: R$ " + this.salario.toFixed(2)
    }
}

let nome = prompt("Nome do funcionário:")
if(nome === null) return
let cargo = prompt("Cargo:")
if(cargo === null) return
let salario = Number(prompt("Salário atual (R$):"))

let func = new Funcionario(nome, cargo, salario)

let percentual = Number(prompt("Percentual de aumento (%):"))
func.aplicarAumento(percentual)

alert("Dados atualizados:\n" + func.exibir())
}