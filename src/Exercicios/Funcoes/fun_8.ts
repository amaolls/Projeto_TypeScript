
// Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function fun_8(): void {
    
    alert("Controle de Estoque de Loja")
    
    let totalGeral: number = 0
    let somaPrecos: number = 0
    let quantidadeProdutos: number = 0
    

    function desconto_valor_total(preco: number, quant: number): number {
        let valorTotal: number = preco * quant
        
        if (quant > 10) {
            valorTotal = valorTotal * 0.95
        }
        
        return valorTotal
    }
    
    let preco: number = Number(prompt("Informe o preço unitário do produto (0 para sair): "))
    
    
    while (preco !== 0) {
        let quant: number = Number(prompt("Informe a quantidade comprada: "))
        
        let valorFinal: number = desconto_valor_total(preco, quant)
        
        totalGeral += valorFinal
        somaPrecos += preco
        quantidadeProdutos++
        
        alert("Valor deste item: R$ " + valorFinal.toFixed(2))
        
    
        preco = Number(prompt("Informe o preço unitário do produto (0 para sair): "))
    }
    
    
    if (quantidadeProdutos > 0) {
        let mediaPrecos: number = somaPrecos / quantidadeProdutos
        
        alert(
            " RELATÓRIO FINAL \n\n" +
            "Total de produtos cadastrados: " + quantidadeProdutos + "\n" +
            "Total geral investido: R$ " + totalGeral.toFixed(2) + "\n" +
            "Média de preço dos produtos: R$ " + mediaPrecos.toFixed(2)
        )
    } else {
        alert("Nenhum produto foi cadastrado.")
    }
}