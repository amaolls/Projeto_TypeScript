// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


export function poo_11 (){
class Pedido {
    cliente: string
    nomePedido: string
    valor: number

    constructor(cliente: string, nomePedido: string, valor: number) {
        this.cliente = cliente
        this.nomePedido = nomePedido
        this.valor = valor
    }

    resumo(): string {
        return "Cliente: " + this.cliente +
               "\nPedido: " + this.nomePedido +
               "\nValor: R$ " + this.valor.toFixed(2)
    }
}

let cliente = prompt("Nome do cliente:")
if(cliente === null) return
let pedido = prompt("Nome do pedido:")
if(pedido === null) return
let valor = Number(prompt("Valor do pedido (R$):"))

let objPedido = new Pedido(cliente, pedido, valor)
alert("Resumo do pedido:\n" + objPedido.resumo())
}