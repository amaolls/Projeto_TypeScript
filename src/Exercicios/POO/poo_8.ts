// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function poo_8 (){
    class Funcionario {
    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    resumo(): string {
        return "Nome: " + this.nome + "\nCargo: " + this.cargo + "\nSalário: R$ " + this.salario.toFixed(2)
    }
}

let nome = prompt("Nome do funcionário:")
if(nome === null) return
let cargo = prompt("Cargo:")
if(cargo === null) return
let salario = Number(prompt("Salário (R$):"))

let func = new Funcionario(nome, cargo, salario)
alert("Resumo do cadastro:\n" + func.resumo())
}