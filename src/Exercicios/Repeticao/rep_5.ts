// Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor < 1000: Retorna Bronze;
// o Se valor entre 1000 e 5000: Retorna Prata;
// o Se valor > 5000: Retorna Ouro;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria Ouro;.

export function rep_5(): void {
    alert("Analisador de Desempenho de Vendas")

    let totalVendas: number = 0
    let maiorVenda: number = 0
    let vendedorMaior: number = 0
    let qtdOuro: number = 0

    function classificarVenda(valor: number): string {
        if (valor < 1000) {
            return "Bronze"
        } else if (valor >= 1000 && valor <= 5000) {
            return "Prata"
        } else {
            return "Ouro"
        }
    }

    for (let i: number = 1; i <= 5; i++) {
        let venda: number = Number(prompt("Digite o valor da venda do vendedor " + i + ": "));
        totalVendas += venda

        if (venda > maiorVenda) {
            maiorVenda = venda
            vendedorMaior = i
        }

        let categoria: string = classificarVenda(venda);
        if (categoria === "Ouro") {
            qtdOuro++
        }

        alert("Vendedor " + i + " - Categoria: " + categoria)
    }

    alert(
        " RELATÓRIO DA EQUIPE \n\n" +
        "Total de vendas: R$ " + totalVendas.toFixed(2) +
        "\nMaior venda: R$ " + maiorVenda.toFixed(2) + " (Vendedor " + vendedorMaior + ")" +
        "\nVendedores Ouro: " + qtdOuro)
}