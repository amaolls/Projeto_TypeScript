// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.


export function poo_20 (){
class Pedido {
    mesa: number
    valorIngredientes: number

    constructor(mesa: number, valorIngredientes: number) {
        this.mesa = mesa
        this.valorIngredientes = valorIngredientes
    }

    calcularTotal(): number {
        return this.valorIngredientes
    }

    resumo(): string {
        return "Mesa: " + this.mesa +
               "\nValor ingredientes: R$ " + this.valorIngredientes.toFixed(2) +
               "\nTotal: R$ " + this.calcularTotal().toFixed(2)
    }
}

class PedidoDelivery extends Pedido {
    taxaEntrega: number
    endereco: string

    constructor(mesa: number, valorIngredientes: number, taxaEntrega: number, endereco: string) {
        super(mesa, valorIngredientes)
        this.taxaEntrega = taxaEntrega
        this.endereco = endereco
    }

    calcularTotal(): number {
        return this.valorIngredientes + this.taxaEntrega
    }

    resumo(): string {
        return "Mesa: " + this.mesa +
               "\nEndereço: " + this.endereco +
               "\nValor ingredientes: R$ " + this.valorIngredientes.toFixed(2) +
               "\nTaxa entrega: R$ " + this.taxaEntrega.toFixed(2) +
               "\nTotal: R$ " + this.calcularTotal().toFixed(2)
    }
}

let tipo = prompt("1 - Pedido local\n2 - Delivery")
let mesa = Number(prompt("Número da mesa:"))
let valor = Number(prompt("Valor dos ingredientes:"))

if (tipo === "2") {
    let taxa = Number(prompt("Taxa de entrega:"))
    let end = prompt("Endereço: ")
    if(end === null) return
    let pedido = new PedidoDelivery(mesa, valor, taxa, end)
    alert("Resumo do pedido:\n" + pedido.resumo())
} else {
    let pedido = new Pedido(mesa, valor)
    alert("Resumo do pedido:\n" + pedido.resumo())
}
}