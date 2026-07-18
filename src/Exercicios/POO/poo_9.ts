// Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function poo_9 (){
class Produto {
    nome: string
    preco: number
    quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    valorTotal(): number {
        return this.preco * this.quantidade
    }

    exibir(): string {
        return "Produto: " + this.nome +
               "\nPreço: R$ " + this.preco.toFixed(2) +
               "\nQuantidade: " + this.quantidade +
               "\nValor total em estoque: R$ " + this.valorTotal().toFixed(2)
    }
}

let nome = prompt("Nome do produto:")
if(nome === null)return
let preco = Number(prompt("Preço unitário (R$):"))
let quantidade = Number(prompt("Quantidade em estoque:"))

let produto = new Produto(nome, preco, quantidade)
alert("Dados do produto:\n" + produto.exibir())   
}