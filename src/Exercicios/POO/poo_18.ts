// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos necessita de uma ferramenta para calcular a folha salarial dos
// colaboradores. Todo colaborador possui nome e um salário base privado. Um Professor recebe um
// acréscimo de 20% sobre o salário base por dedicação exclusiva. Um Técnico Administrativo recebe
// um valor fixo extra de auxílio-alimentação. O programa deve rodar em um laço solicitando o cadastro
// dos funcionários do mês. Após coletar todos os dados, o software deve rodar a lista utilizando uma
// estrutura de repetição, acionar o método de cálculo salarial específico de cada um e exibir o custo
// total que a instituição terá naquele mês.


export function poo_18() {

class Funcionario {
    nome: string
    private _salarioBase: number

    constructor(nome: string, salarioBase: number) {
        this.nome = nome
        this._salarioBase = salarioBase
    }

    get salarioBase(): number { return this._salarioBase; }

    calcularSalario(): number {
        return this._salarioBase
    }
}

class Professor extends Funcionario {
    constructor(nome: string, salarioBase: number) {
        super(nome, salarioBase)
    }

    calcularSalario(): number {
        return this.salarioBase * 1.5
    }
}

class Tecnico extends Funcionario {
    auxilioAlimentacao: number

    constructor(nome: string, salarioBase: number, auxilio: number) {
        super(nome, salarioBase)
        this.auxilioAlimentacao = auxilio
    }

    calcularSalario(): number {
        return this.salarioBase + this.auxilioAlimentacao
    }
}

let tipo = prompt("1 - Professor\n2 - Técnico")
let nome = prompt("Nome:")
if(nome === null) return
let salarioBase = Number(prompt("Salário base:"))

if (tipo === "1") {
    let func = new Professor(nome, salarioBase);
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
} else {
    let aux = Number(prompt("Auxílio alimentação:"))
    let func = new Tecnico(nome, salarioBase, aux)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
}
}