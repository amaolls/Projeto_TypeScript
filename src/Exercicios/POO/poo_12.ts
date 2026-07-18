// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação.

export function poo_12() {
class Locacao {
    modelo: string
    valorDiaria: number
    dias: number

    constructor(modelo: string, valorDiaria: number, dias: number) {
        this.modelo = modelo
        this.valorDiaria = valorDiaria
        this.dias = dias
    }

    calcularTotal(): number {
        return this.valorDiaria * this.dias
    }

    resumo(): string {
        return "Modelo: " + this.modelo +
               "\nDiárias: " + this.dias +
               "\nValor total: R$ " + this.calcularTotal().toFixed(2)
    }
}

let modelo = prompt("Modelo do carro:")
if(modelo === null) return
let diaria = Number(prompt("Valor da diária (R$):"))
let dias = Number(prompt("Quantos dias?"))

let locacao = new Locacao(modelo, diaria, dias)
alert("Resumo da locação:\n" + locacao.resumo())
}


