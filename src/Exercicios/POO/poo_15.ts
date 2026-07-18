// Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionario como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function poo_15 (){
class Funcionario {
    nome: string
    salarioBase: number

    constructor(nome: string, salarioBase: number = 0) {
        this.nome = nome
        this.salarioBase = salarioBase
    }

    calcularSalario(): number {
        return this.salarioBase
    }
}

class FuncionarioHorista extends Funcionario {
    horas: number
    valorHora: number

    constructor(nome: string, horas: number, valorHora: number) {
        super(nome)
        this.horas = horas
        this.valorHora = valorHora
    }

    calcularSalario(): number {
        return this.horas * this.valorHora
    }
}

class FuncionarioAssalariado extends Funcionario {
    bonus: number
    constructor(nome: string, salarioBase: number, bonus: number) {
        super(nome, salarioBase)
        this.bonus = bonus
    }

    calcularSalario(): number {
        return this.salarioBase + this.bonus
    }
}

let tipo = prompt("1 - Horista\n2 - Assalariado")
let nome = prompt("Nome:")
if(nome === null) return

if (tipo === "1") {
    let h = Number(prompt("Horas:"))
    let vh = Number(prompt("Valor hora:"))
    let func = new FuncionarioHorista(nome, h, vh)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
} else {
    let sb = Number(prompt("Salário base:"))
    let b = Number(prompt("Bônus:"))
    let func = new FuncionarioAssalariado(nome, sb, b)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
}
}