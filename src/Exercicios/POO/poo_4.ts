// Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function poo_4 (){
    class PisoRodape {
    comprimento: number
    largura: number

    constructor(comprimento: number, largura: number) {
        this.comprimento = comprimento
        this.largura = largura
    }

    calcularPisos(): number {
        return this.comprimento * this.largura
    }

    calcularRodapes(): number {
        return 2 * (this.comprimento + this.largura)
    }
}

let comprimento = Number(prompt("Digite o comprimento do local (em metros):"))
let largura = Number(prompt("Digite a largura do local (em metros):"))

let local = new PisoRodape(comprimento, largura)

let pisos = local.calcularPisos()
let rodapes = local.calcularRodapes()

alert(
    "Medidas do local:\n" +
    "Comprimento: " + comprimento + " m\n" +
    "Largura: " + largura + " m\n\n" +
    "Quantidade de pisos necessários (1 m² cada): " + pisos + "\n" +
    "Quantidade de rodapés necessários (1 m linear cada): " + rodapes
)
}