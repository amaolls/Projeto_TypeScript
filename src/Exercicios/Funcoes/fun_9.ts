// Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

export function fun_9(){

    
    alert("Simulador de Aprovação de Crédito")
    
    
    function solicitar_renda_mensal(): number {
        let renda: number = Number(prompt("Informe sua renda mensal (R$): "))
        while (renda <= 0) {
            renda = Number(prompt("Valor inválido. Informe uma renda positiva: "))
        }
        return renda
    }
    
    
    function analisar_credito(renda: number, valor_parcela: number): number {
        let limite: number = renda
        if (renda > 5000) {
            limite = renda + 500
        }
        let parcelaMaxima: number = limite * 0.3
        if (valor_parcela <= parcelaMaxima) {
            return 1
        } else {
            return 0
        }
    }
    

    function exibir_status(status: number): void {
        if (status === 1) {
            alert("Crédito Aprovado")
        } else {
            alert("Crédito Negado")
        }
    }
    

    let renda: number = solicitar_renda_mensal()
    let parcela: number = Number(prompt("Informe o valor da parcela desejada (R$): "))
    let resultado: number = analisar_credito(renda, parcela)
    exibir_status(resultado)
}
