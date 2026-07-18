// Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.



export function poo_28 (){

class Acomodacao {
    numero: number
    precoBase: number

    constructor(numero: number, precoBase: number) {
        this.numero = numero
        this.precoBase = precoBase
    }

    calcularTotal(dias: number): number {
        return this.precoBase * dias
    }
}

class SuiteMaster extends Acomodacao {
    adicionalHidro: number

    constructor(numero: number, precoBase: number, adicionalHidro: number) {
        super(numero, precoBase)
        this.adicionalHidro = adicionalHidro
    }

    calcularTotal(dias: number): number {
        return (this.precoBase + this.adicionalHidro) * dias
    }
}

let num = Number(prompt("Número do quarto:"))
let preco = Number(prompt("Preço base da diária:"))
let tipo = prompt("1 - Comum\n2 - Suite Master")

let acomodacao: Acomodacao
if (tipo === "2") {
    let extra = Number(prompt("Adicional hidromassagem por diária:"))
    acomodacao = new SuiteMaster(num, preco, extra)
} else {
    acomodacao = new Acomodacao(num, preco)
}

let dias = Number(prompt("Quantos dias?"))
let total = acomodacao.calcularTotal(dias)

alert("Quarto: " + acomodacao.numero +
      "\nDiárias: " + dias +
      "\nValor total: R$ " + total.toFixed(2))
}