// Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.

export function fun_6(): void {
    
    alert("Cálculo de Folha de Pagamento")
    
    let valorHora: number = Number(prompt("Digite o valor da sua hora (R$): "))
    let horasTrabalhadas: number = Number(prompt("Digite a quantidade de horas trabalhadas no mês: "))
    
    function calcularFolha(valorHora: number, horas: number): void {
       
        let salarioBruto: number = valorHora * horas
        
    
        let ir: number = 0
        let aliquotaIR: number = 0
    
        if (salarioBruto <= 2428.80) {
            ir = 0
            aliquotaIR = 0
        } else if (salarioBruto <= 2826.65) {
            ir = salarioBruto * 0.075
            aliquotaIR = 7.5
        } else if (salarioBruto <= 3751.05) {
            ir = salarioBruto * 0.15
            aliquotaIR = 15
        } else if (salarioBruto <= 4664.68) {
            ir = salarioBruto * 0.225
            aliquotaIR = 22.5
        } else {
            ir = salarioBruto * 0.275
            aliquotaIR = 27.5;
        }
        
        
        let sindicato: number = salarioBruto * 0.03   
        let valeTransporte: number = salarioBruto * 0.06
        let valeAlimentacao: number = salarioBruto * 0.08
        let inss: number = salarioBruto * 0.10
        let fgts: number = salarioBruto * 0.11
        
        let totalDescontos: number = ir + sindicato + valeTransporte + valeAlimentacao + inss
        let salarioLiquido: number = salarioBruto - totalDescontos
        
        
        alert(
            "=== FOLHA DE PAGAMENTO ===\n\n" +
            "Salário Bruto: (" + valorHora + " * " + horas + ")\t: R$ " + salarioBruto.toFixed(2) +
            "\n\n(-) IR (" + aliquotaIR + "%)\t\t\t: R$ " + ir.toFixed(2) +
            "\n(-) Sindicato (3%)\t\t: R$ " + sindicato.toFixed(2) +
            "\n(-) Vale Transporte (6%)\t\t: R$ " + valeTransporte.toFixed(2) +
            "\n(-) Vale Alimentação (8%)\t: R$ " + valeAlimentacao.toFixed(2) +
            "\n(-) INSS (10%)\t\t\t: R$ " + inss.toFixed(2) +
            "\n\nFGTS (11% - não descontado)\t: R$ " + fgts.toFixed(2) +
            "\nTotal de descontos\t\t: R$ " + totalDescontos.toFixed(2) +
            "\nSalário Líquido\t\t\t: R$ " + salarioLiquido.toFixed(2)
        )
    }
    
    calcularFolha(valorHora, horasTrabalhadas)
}