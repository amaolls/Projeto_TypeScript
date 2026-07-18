declare const hljs: any;
//
import { cond_1 } from "./Exercicios/Condicional/cond_1.js"
import { cond_2 } from "./Exercicios/Condicional/cond_2.js"
import { cond_3 } from "./Exercicios/Condicional/cond_3.js"
import { cond_4 } from "./Exercicios/Condicional/cond_4.js"

import { fun_1 } from "./Exercicios/Funcoes/fun_1.js"
import { fun_2 } from "./Exercicios/Funcoes/fun_2.js"
import { fun_3 } from "./Exercicios/Funcoes/fun_3.js"
import { fun_4 } from "./Exercicios/Funcoes/fun_4.js"
import { fun_5 } from "./Exercicios/Funcoes/fun_5.js"
import { fun_6 } from "./Exercicios/Funcoes/fun_6.js"
import { fun_7 } from "./Exercicios/Funcoes/fun_7.js"
import { fun_8 } from "./Exercicios/Funcoes/fun_8.js"
import { fun_9 } from "./Exercicios/Funcoes/fun_9.js"
import { fun_10 } from "./Exercicios/Funcoes/fun_10.js"

import { rep_1 } from "./Exercicios/Repeticao/rep_1.js"
import { rep_2 } from "./Exercicios/Repeticao/rep_2.js"
import { rep_3 } from "./Exercicios/Repeticao/rep_3.js"
import { rep_4 } from "./Exercicios/Repeticao/rep_4.js"
import { rep_5 } from "./Exercicios/Repeticao/rep_5.js"

import { Questao_1 } from "./Exercicios/Array/Questao_1.js"
import { Questao_2 } from "./Exercicios/Array/Questao_2.js"
import { Questao_3 } from "./Exercicios/Array/Questao_3.js"
import { Questao_4 } from "./Exercicios/Array/Questao_4.js"
import { Questao_5 } from "./Exercicios/Array/Questao_5.js"
import { Questao_6 } from "./Exercicios/Array/Questao_6.js"
import { Questao_7 } from "./Exercicios/Array/Questao_7.js"
import { Questao_8 } from "./Exercicios/Array/Questao_8.js"
import { Questao_9 } from "./Exercicios/Array/Questao_9.js"
import { Questao_10 } from "./Exercicios/Array/Questao_10.js"

import { poo_1 } from "./Exercicios/POO/poo_1.js"
import { poo_2 } from "./Exercicios/POO/poo_2.js"
import { poo_3 } from "./Exercicios/POO/poo_3.js"
import { poo_4 } from "./Exercicios/POO/poo_4.js"
import { poo_5 } from "./Exercicios/POO/poo_5.js"
import { poo_6 } from "./Exercicios/POO/poo_6.js"
import { poo_7 } from "./Exercicios/POO/poo_7.js"
import { poo_8 } from "./Exercicios/POO/poo_8.js"
import { poo_9 } from "./Exercicios/POO/poo_9.js"
import { poo_10 } from "./Exercicios/POO/poo_10.js"
import { poo_11 } from "./Exercicios/POO/poo_11.js"
import { poo_12 } from "./Exercicios/POO/poo_12.js"
import { poo_13 } from "./Exercicios/POO/poo_13.js"
import { poo_14 } from "./Exercicios/POO/poo_14.js"
import { poo_15 } from "./Exercicios/POO/poo_15.js"
import { poo_16 } from "./Exercicios/POO/poo_16.js"
import { poo_17 } from "./Exercicios/POO/poo_17.js"
import { poo_18 } from "./Exercicios/POO/poo_18.js"
import { poo_19 } from "./Exercicios/POO/poo_19.js"
import { poo_20 } from "./Exercicios/POO/poo_20.js"
import { poo_21 } from "./Exercicios/POO/poo_21.js"
import { poo_22 } from "./Exercicios/POO/poo_22.js"
import { poo_23 } from "./Exercicios/POO/poo_23.js"
import { poo_24 } from "./Exercicios/POO/poo_24.js"
import { poo_25 } from "./Exercicios/POO/poo_25.js"
import { poo_26 } from "./Exercicios/POO/poo_26.js"
import { poo_27 } from "./Exercicios/POO/poo_27.js"
import { poo_28 } from "./Exercicios/POO/poo_28.js"
import { poo_29 } from "./Exercicios/POO/poo_29.js"
import { poo_30 } from "./Exercicios/POO/poo_30.js"



//linha copia e cola codigo daa questões
const codigosQuestoes: Record<string, string> = {
    //Q1 (CONDICIONAL)
    'btn-q1': `1 - Crie um programa que leia um número e informe se ele é:
• Par ou Ímpar
• Positivo ou Negativo

alert("Esse programa retorna se número é par ou ímpar.")
function impar_Par(valor:number): any {
        if(valor % 2 === 0){
            alert("Número " + valor + " é Par.")
        } else {
            alert("Número " + valor + " é Ímpar.")
        }
    }
    
    let numero: number = Number(prompt("Informe um número: "))
    impar_Par(numero)`,

    //Q2
    'btn-q2': String.raw`2 - Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
você deve imprimir uma mensagem conforme o exemplo: "A estação do ano correspondente
ao mês 3 é Verão"; Considere a estação prevalente para cada mês:

a) Janeiro (1): Verão
b) Fevereiro (2): Verão
c) Março (3): Verão
d) Abril (4): Outono
e) Maio (5): Outono
f) Junho (6): Outono
g) Julho (7): Inverno
h) Agosto (8): Inverno
i) Setembro (9): Inverno
j) Outubro (10): Primavera
k) Novembro (11): Primavera
l) Dezembro (12): Primavera

    alert("Esse programa retorna estaçõesdo ano correspondente ao mês")
    let entrada: string | null = prompt("Informe um mês válido de 1 a 12: ");
    
    let mes: number = Number(entrada)
    let estacao: string

    switch (mes) {
        case 1:
        case 2:
        case 3:
            estacao = "Verão"
            break;
        case 4:
        case 5:
        case 6:
            estacao = "Outono"
            break;
        case 7:
        case 8:
        case 9:
            estacao = "Inverno"
            break;
        case 10:
        case 11:
        case 12:
            estacao = "Primavera"
            break;
        default:
            alert("Mês inválido! Informe um número entre 1 e 12.")
            return
    }

    alert(\`A estação do ano correspondente ao mês \${mes} é \${estacao}\`)`,

    //Q3
    'btn-q3': String.raw`3 - Crie um programa que solicite dois números e simule um menu de uma calculadora:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão
Use switch...Case

alert("Calculadora simples")
let P_entrada: number = Number(prompt("Digite o primeiro número: "))
    let S_entrada: number = Number(prompt("Digite o segundo número: "))
    let opcao: number = Number(prompt("Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"))
    let resultado: number
    let operacaoNome: string

    switch (opcao) {
        case 1:
            resultado = P_entrada + S_entrada
            operacaoNome = "soma"
            break;
        case 2:
            resultado = P_entrada - S_entrada
            operacaoNome = "subtração"
            break;
        case 3:
            resultado = P_entrada * S_entrada
            operacaoNome = "multiplicação"
            break;
        case 4:
            resultado = P_entrada / S_entrada
            operacaoNome = "divisão"
            break;
        default:
            return
    }

    alert(\`Resultado da \${operacaoNome}: \${P_entrada} e \${S_entrada} = \${resultado}\`)`,

    //Q4
    'btn-q4': `4 - Ler dois valores e imprimir uma das três mensagens a seguir:
● ‘Números iguais’, caso os números sejam iguais;
● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

    alert("Ler dois valores e imprime uma das mensagens: \n‘Números iguais’ \n‘Primeiro é maior’ \n‘Segundo maior’")
    let num1: number = Number(prompt("Digite o primeiro número: "))
    let num2: number = Number(prompt("Digite o segundo número: "))

    if (num1 === num2) {
       
        alert("Números digitados: "+num1+", "+num2+"\n Números iguais")
    } else if (num1 > num2) {
        
        alert("Números digitados: "+num1+", "+num2+"\n Primeiro é maior")
    } else {
        
        alert("Números digitados: "+num1+", "+num2+"\n Segundo maior")
    }`,

    //Q1 (FUNÇÃO)
    'btn-q5': String.raw`1 - Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
deve retornar 10, pois 1+2+3+4 = 10).

    
    alert("Esse programa calcula a soma de todos os números de 1 até o número fornecido.")
    let num_info: number = Number(prompt("Informe um número: "))
    
    function somarAte(n: number): number {
        let soma: number = 0

        for (let i: number = 1; i <= n; i++) {
            soma += i
        }
        return soma
    }
    
    let resultado: number = somarAte(num_info)
    alert(\`A soma dos elementos contidos no número \${num_info} é \${resultado}\`)`,

    //Q2
    'btn-q6': `2 - O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a
temperatura.
● Crie uma função ler_temperatura():
o Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura
(valor inteiro ou float).
o Retorna a temperatura lida.
● Crie uma função verificar_alerta_temperatura(temperatura):
o Recebe a temperatura.
o Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
o Caso contrário, retorna False.
● Crie uma função emitir_mensagem_alerta(status_alerta):
o Recebe o status_alerta (True ou False).
o Se status_alerta for True, imprime "ALERTA: Temperatura fora da faixa ideal!".
o Se status_alerta for False, imprime "Temperatura dentro da faixa normal.".


    
    alert("Leitor de temperatura")

    function ler_temperatura(): number {
        let temp: number = Number(prompt("Digite uma temperatura: "))
        return temp
    }
    
    
    function verificar_alerta_temperatura(temperatura: number): number {
        if (temperatura < 10 || temperatura > 30) {
            return 1
        } else {
            return 0
        }
    }
    
    
    function emitir_mensagem_alerta(status_alerta: number): void {
        if (status_alerta === 1) {
            alert("ALERTA: Temperatura fora da faixa ideal!")
        } else {
            alert("Temperatura dentro da faixa normal.")
        }
    }
    
    
    let temp: number = ler_temperatura()
    let alerta: number = verificar_alerta_temperatura(temp)
    emitir_mensagem_alerta(alerta)`,

    //Q3
    'btn-q7': `3 - Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
desenhar um triângulo de asteriscos no console.
Exemplo para entrada 3:
*
**
***

    alert("Triângulo de asteriscos no console")
    
    let num: number = Number(prompt("Digite um número: "))
    
    function triangulo(n: number): void {
        for (let i: number = 1; i <= n; i++) {
            let linha: string = "";
            for (let j: number = 1; j <= i; j++) {
                linha += "*"
            }
            console.log(linha)
        }
    }
    
    triangulo(num)`,

    //Q4
    'btn-q8': `4 - Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
para ir subtraindo do valor total.

    alert("Caixa Eletrônico - Notas de 50, 20 e 10")
    
    let valor: number = Number(prompt("Digite o valor do saque: "))
    
    function calcularNotas(saque: number): void {
        let notas50: number = 0
        let notas20: number = 0
        let notas10: number = 0
        let restante: number = saque
        
        while (restante >= 50) {
            notas50++;
            restante -= 50
        }
        
        while (restante >= 20) {
            notas20++;
            restante -= 20
        }
        
        while (restante >= 10) {
            notas10++;
            restante -= 10
        }
        
        alert(
            "Valor do saque: " + saque +
            "\nNotas de 50: " + notas50 +
            "\nNotas de 20: " + notas20 +
            "\nNotas de 10: " + notas10
        );
    }
    
    calcularNotas(valor)`,

    //Q5
    'btn-q9': `5 - Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
esse intervalo e imprimir apenas os números que são múltiplos de 3.

    alert("Múltiplos de 3 em um intervalo")
    
    let inicio: number = Number(prompt("Digite o número inicial: "))
    let fim: number = Number(prompt("Digite o número final: "))
    
    function multiplosDeTres(inicio: number, fim: number): void {
        console.log("Múltiplos de 3 entre " + inicio + " e " + fim + ":")
        
        for (let i: number = inicio; i <= fim; i++) {
            if (i % 3 === 0) {
                console.log(i)
            }
        }
    }
    
    multiplosDeTres(inicio, fim)`,

    //Q6
    'btn-q10': `6 - Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
1. Salário Bruto até R$ 2428,80 (inclusive) - isento
2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
é R$15,00 e a quantidade de horas é 220.


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
            " FOLHA DE PAGAMENTO \n\n" +
            "Salário Bruto: (" + valorHora + " * " + horas + ")\t: R$ " + salarioBruto.toFixed(2) +
            "\n\n(-) IR (" + aliquotaIR + "%): R$ " + ir.toFixed(2) +
            "\n(-) Sindicato (3%): R$ " + sindicato.toFixed(2) +
            "\n(-) Vale Transporte (6%): R$ " + valeTransporte.toFixed(2) +
            "\n(-) Vale Alimentação (8%): R$ " + valeAlimentacao.toFixed(2) +
            "\n(-) INSS (10%): R$ " + inss.toFixed(2) +
            "\n\nFGTS (11% - não descontado): R$ " + fgts.toFixed(2) +
            "\nTotal de descontos: R$ " + totalDescontos.toFixed(2) +
            "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2)
        )
    }
    
    calcularFolha(valorHora, horasTrabalhadas)`,

    //Q7
    'btn-q11': `7 - Sistema de Eficiência de Combustível
Crie um programa que ajude um motorista a saber a autonomia do seu carro.
● Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
o consumo médio (km/l).
● Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
quilômetros o carro percorre com o tanque cheio.

    alert("Teste a autonomia do seu carro")
    
    let Distancia_P: number = Number(prompt("Digite a distância percorrida (km): "))
    let Quantidade_C: number = Number(prompt("Digite a quantidade de combustível gasto (litros): "))
    let Capacidade_Tanque: number = Number(prompt("Digite a capacidade total do tanque (litros): "))
    
    
    function Consumo_Medio(distancia: number, combustivel: number): number {
        let consumo: number = distancia / combustivel
        return consumo
    }
    
    
    function Tanque_Cheio(consumoMedio: number, capacidadeTanque: number): number {
        let autonomia: number = consumoMedio * capacidadeTanque
        return autonomia
    }
    
    
    let kmPorLitro: number = Consumo_Medio(Distancia_P, Quantidade_C)
    let autonomiaTotal: number = Tanque_Cheio(kmPorLitro, Capacidade_Tanque)
    
    
    alert(
        " AUTONOMIA DO VEÍCULO \n\n" +
        "Distância percorrida: " + Distancia_P + " km\n" +
        "Combustível gasto: " + Quantidade_C + " litros\n" +
        "Consumo médio: " + kmPorLitro.toFixed(2) + " km/l\n\n" +
        "Capacidade do tanque: " + Capacidade_Tanque + " litros\n" +
        "Autonomia com tanque cheio: " + autonomiaTotal.toFixed(2) + " km"
    )`,

    //Q8
    'btn-q12': `8 - Controle de Estoque de Loja (Loop e Relatório)
Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
preço unitário do produto e a quantidade comprada.
● Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
● O programa deve repetir a solicitação até que o preço informado seja zero.
● Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
cadastrados.

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
    }`,

    //Q9
    'btn-q13': `9 - Simulador de Aprovação de Crédito
Uma loja quer automatizar a análise de crédito de clientes.

● Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
pede novamente até ser válido.
● Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
renda.
i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
limite final.
ii. Retorna true para aprovado ou false para negado.

Função exibir_status(resultado): Imprime "Crédito Aprovado" ou "Crédito Negado".
Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

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
    exibir_status(resultado)`,

    //Q10
    'btn-q14': String.raw`10 - Calculadora de IMC com Classificação.
Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
● Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
● Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
o Abaixo de 18.5: "Abaixo do peso"
o Entre 18.5 e 24.9: "Peso Normal"
o 25 ou mais: "Sobrepeso"
● Função exibir_laudo(nome, classificacao): Imprime: "Paciente: [nome] - Status:
[classificacao]".
● Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

    alert("Calculadora de IMC com Classificação")

    let nome_cliente: string = String (prompt("Informe o nome do paciente: "))
    let peso: number = Number(prompt("Informe o peso (kg): "))
    let altura: number = Number(prompt("Informe a altura (m): "))


    function calcular_imc(peso: number, altura: number): number {
        let imc: number = peso / (altura * altura)
        return imc
    }

    function classificar_imc(valor_imc: number): string {
        if (valor_imc < 18.5) {
            return "Abaixo do peso"
        } else if (valor_imc >= 18.5 && valor_imc < 25) {
            return "Peso Normal"
        } else {
            return "Sobrepeso"
        }
    }


    function exibir_laudo(nome_cliente: string, classificacao: string): void {
        alert(\`Paciente: \${nome_cliente} \n Status: \${classificacao}\`)
    }


    let imc: number = calcular_imc(peso, altura)
    let classificacao: string = classificar_imc(imc)
    exibir_laudo(nome_cliente, classificacao)`,

    //Q1 (REPETIÇÃO)
    'btn-q15': `1 - Crie um programa que peça números até o usuário digitar 0 e mostre:
● Quantidade de números digitados
● Soma total

    alert("Programa: soma e conta números até digitar 0")

    let quantidade: number = 0
    let soma: number = 0
    let numero: number = Number(prompt("Digite um número (0 para sair): "))

    while (numero !== 0) {
        quantidade++
        soma += numero
        numero = Number(prompt("Digite outro número (0 para sair): "))
    }

    alert("Quantidade de números digitados: " + quantidade + "\nSoma total: " + soma)`,

    //Q2
    'btn-q16': String.raw`2 - Desenvolva a tabuada de um número usando for.
    
        alert("Tabuada do número")
    let num: number = Number(prompt("Digite um número para ver sua tabuada: "))
    let tabuada: string = ""

    for (let i: number = 1; i <= 10; i++) {
        tabuada += \`\${num} x \${i} = \${num * i}\n\`
    }

    alert(tabuada)`,

    //Q3
    'btn-q17': `3 - Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
programa.
Calcule e imprima:
● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
recebeu;
● O número de funcionários do sexo masculino e feminino cadastrado;
● O percentual de funcionários homens e mulheres cadastrados.

    alert("Cadastro de operários")

    let somaSalarios: number = 0
    let maiorSalario: number = 0
    let nomeMaiorSalario: string = ""
    let qtdMasculino: number = 0
    let qtdFeminino: number = 0
    let qtdTotal: number = 0

    let continuar: string = "S"

    while (continuar === "S" || continuar === "s") {
        let nome_f: string = String (prompt("Nome do operário: "))
        let horas: number = Number(prompt("Horas trabalhadas: "))
        let salarioHora: number = Number(prompt("Salário por hora: "))
        let sexo_f: string = String (prompt("Sexo (M/F): "))

        let salario: number = horas * salarioHora
        qtdTotal++;
        somaSalarios += salario

        if (salario > maiorSalario) {
            maiorSalario = salario
            nomeMaiorSalario = nome_f
        }

        if (sexo_f === "M" || sexo_f === "m") {
            qtdMasculino++
        } else if (sexo_f === "F" || sexo_f === "f") {
            qtdFeminino++
        }

        continuar = String (prompt("Deseja continuar? (S/N): "))
    }

    let percMasculino: number = 0
    let percFeminino: number = 0
    if (qtdTotal > 0) {
        percMasculino = (qtdMasculino / qtdTotal) * 100
        percFeminino = (qtdFeminino / qtdTotal) * 100
    }

    alert(
        "=== RELATÓRIO ===\n\n" +
        "Salário total dos funcionários: R$ " + somaSalarios.toFixed(2) +
        "\nMaior salário: R$ " + maiorSalario.toFixed(2) + " (recebido por " + nomeMaiorSalario + ")" +
        "\n\nNúmero de homens cadastrados: " + qtdMasculino +
        "\nNúmero de mulheres cadastradas: " + qtdFeminino +
        "\n\nPercentual de homens: " + percMasculino.toFixed(1) + "%" +
        "\nPercentual de mulheres: " + percFeminino.toFixed(1) + "%"
    )`,

    //Q4
    'btn-q18': `4 - Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
valor -1 é utilizado como sentinela para fim de leitura.

    alert("Contador de pares e ímpares (-1 para sair)")

    let QPares: number = 0
    let QImpares: number = 0
    let X: number = Number(prompt("Digite um número (-1 para encerrar): "))

    while (X !== -1) {
        if (X % 2 === 0) {
            QPares++
        } else {
            QImpares++
        }
        X = Number(prompt("Digite outro número (-1 para encerrar): "))
    }

    alert("Quantidade de pares: " + QPares + "\nQuantidade de ímpares: " + QImpares)`,

    //Q5
    'btn-q19': `5 - Analisador de Desempenho de Vendas (Relatório de Equipe)
Imagine que você está gerindo uma equipe de 5 vendedores.
● Função classificarVenda(valor):
o Se valor < 1000: Retorna "Bronze"
o Se valor entre 1000 e 5000: Retorna "Prata"
o Se valor > 5000: Retorna "Ouro"
● O Programa:
1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
2. Dentro do laço, chame a função de classificação.
3. Ao final, o programa deve exibir:
● O total de vendas da equipe (soma).
● Quem foi o vendedor com a maior venda (maior valor digitado).
● Quantos vendedores atingiram a categoria "Ouro".

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
        "\nVendedores Ouro: " + qtdOuro)`,

    //Q1 (ARRAY)
    'btn-q20': `1 - Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
a) Números pares
b) Números ímpares
c) Todos os múltiplos de 2,3 e 4
d) Lista reversa

    alert("Derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]")
    let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    
    let pares: number[] = [];
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }

    
    let impares: number[] = []
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i])
        }
    }

    
    let multiplos2_3_4: number[] = []
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0 && numeros[i] % 4 === 0) {
            multiplos2_3_4.push(numeros[i])
        }
    }

   
    let reversa: number[] = []
    for (let i: number = numeros.length - 1; i >= 0; i--) {
        reversa.push(numeros[i])
    }

    
    alert(
        "Listas derivadas de [0..15]:\n\n" +
        "a) Pares: " + pares.join(", ") + "\n" +
        "b) Ímpares: " + impares.join(", ") + "\n" +
        "c) Múltiplos de 2, 3 e 4: " + multiplos2_3_4.join(", ") + "\n" +
        "d) Lista reversa: " + reversa.join(", ")
    )`,

    //Q2
    'btn-q21': `2 - Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
entrada de dados, faça o seguinte:
a) Mostre a quantidade de notas que foram lidas.
b) Exiba todas as notas na ordem em que foram informadas.
c) Exiba todas as notas na ordem inversa à que foram informadas.
d) Calcule e mostre a soma das notas.
e) Calcule e mostre a média das notas.
f) Calcule e mostre a quantidade de notas acima da média calculada.

    alert("Ler um número indeterminado de notas ou -1 para encerrar")
    let notas: number[] = []
    let nota: number = Number(prompt("Digite uma nota (-1 para encerrar): "))

    while (nota !== -1) {
        notas.push(nota)
        nota = Number(prompt("Digite outra nota (-1 para encerrar): "))
    }

    let quantidade: number = notas.length
    if (quantidade === 0) {
        alert("Nenhuma nota foi informada.")
        return
    }


    let ordemOriginal: string = notas.join(", ")


    let ordemInversa: string = ""
    for (let i: number = quantidade - 1; i >= 0; i--) {
        ordemInversa += notas[i]
        if (i > 0) {
            ordemInversa += ", "
        }
    }


    let soma: number = 0
    for (let i: number = 0; i < quantidade; i++) {
        soma += notas[i]
    }


    let media: number = soma / quantidade


    let acimaMedia: number = 0
    for (let i: number = 0; i < quantidade; i++) {
        if (notas[i] > media) {
            acimaMedia++
        }
    }

    alert(
        " RELATÓRIO DE NOTAS \n\n" +
        "Quantidade de notas: " + quantidade + "\n\n" +
        "Ordem original: " + ordemOriginal + "\n" +
        "Ordem inversa: " + ordemInversa + "\n\n" +
        "Soma: " + soma.toFixed(2) + "\n" +
        "Média: " + media.toFixed(2) + "\n" +
        "Notas acima da média: " + acimaMedia)`,

    //Q3
    'btn-q22': `3 - Gerador de Lista de Compras Personalizada
Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
adicionar itens e a quantidade de cada um.
Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
● Permitir que o usuário adicione itens à lista(array) até que ele digite "fim".
● Permitir que o usuário apresente todos os itens da lista.
● Permitir que o usuário apresente quantos itens há na lista.
● Permitir que o usuário remova itens da lista.

    alert("Gerador de Lista de Compras Personalizada")
    function gerar_lista_compras(): void {
        let lista: string[] = []
        let opcao_l: string = ""

        while (opcao_l !== "5") {
            opcao_l = String (prompt(
                "MENU\n1 - Adicionar itens\n2 - Listar itens\n3 - Quantidade de itens\n4 - Remover item\n5 - Sair"
            ))

            if (opcao_l === "1") {

                let continuar: boolean = true
                while (continuar) {
                    let nomeItem: string | null = prompt("Nome do item (ou 'fim' para voltar ao menu):")
                    if (nomeItem === null || nomeItem.toLowerCase() === "fim") {
                        continuar = false
                    } else {
                        let quantidade: number = Number(prompt("Quantidade:"))
                        lista.push(nomeItem + " - " + quantidade)
                    }
                }
            } else if (opcao_l === "2") {

                if (lista.length === 0) {
                    alert("Lista vazia.")
                } else {
                    let texto: string = "Lista de compras:\n";
                    for (let i: number = 0; i < lista.length; i++) {
                        texto += (i + 1) + ". " + lista[i] + "\n"
                    }
                    alert(texto)
                }
            } else if (opcao_l === "3") {

                alert("Total de itens na lista: " + lista.length)
            } else if (opcao_l === "4") {

                if (lista.length === 0) {
                    alert("Lista vazia, nada a remover.")
                } else {
                    let texto: string = "Escolha o número do item para remover:\n";
                    for (let i: number = 0; i < lista.length; i++) {
                        texto += (i + 1) + ". " + lista[i] + "\n"
                    }
                    let num: string | null = prompt(texto)
                    if (num !== null) {
                        let indice: number = Number(num) - 1
                        if (indice >= 0 && indice < lista.length) {
                            lista.splice(indice, 1)
                            alert("Item removido.")
                        } else {
                            alert("Número inválido.")
                        }
                    }
                }
            } else if (opcao_l === "5") {
                alert("Encerrando lista de compras.")
                return
            } else {
                alert("Opção inválida. Tente novamente.")
            }
        }
    }

    gerar_lista_compras()`,

    //Q4
    'btn-q23': `4 - Calculadora de Média do ENEM
Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
A função deve:
● Calcular a média das notas.
● Arredondar a média para duas casas decimais.
● Retornar o valor da média.

    alert("Calculadora de Média do ENEM")
    function calcular_media(notas: number[]): number {
        let soma: number = 0
        for (let i: number = 0; i < notas.length; i++) {
            soma += notas[i]
        }
        let media: number = soma / notas.length
        
        let mediaArredondada: number = Math.round(media * 100) / 100
        return mediaArredondada
    }

    let entrada: string | null = prompt("Digite as notas separadas por vírgula (ex: 7.5,8,6.9):")
    if (entrada === null || entrada.trim() === "") {
        alert("Nenhuma nota fornecida.")
        return
    }
    let partes: string[] = entrada.split(",")
    let notas: number[] = []
    for (let i: number = 0; i < partes.length; i++) {
        let valor: number = Number(partes[i].trim())
        if (!isNaN(valor)) {
            notas.push(valor)
        }
    }
    if (notas.length === 0) {
        alert("Nenhuma nota válida.")
        return
    }
    let media: number = calcular_media(notas)
    alert("Média: " + media.toFixed(2))`,

    //Q5
    'btn-q24': `5 - Organizador de Tarefas Diárias
Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
chamada gerenciar_tarefas() que não receba argumentos. A função deve:
a) Permitir que o usuário adicione tarefas a um vetor.
b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
exemplo).
c) Permitir que o usuário exiba todas as tarefas pendentes.
Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
manter o programa rodando até o usuário escolher sair.

    alert("Organizador de Tarefas Diárias")

    function gerenciar_tarefas(): void {
        let tarefas: string[] = []
        let opcao_t: string = ""

        while (opcao_t !== "4") {
            opcao_t = String (prompt(
                "MENU\n1 - Adicionar tarefa\n2 - Concluir tarefa (remover)\n3 - Exibir pendentes\n4 - Sair"
            ))

            if (opcao_t === "1") {
                let novaTarefa: string | null = prompt("Digite a tarefa:")
                if (novaTarefa !== null && novaTarefa.trim() !== "") {
                    tarefas.push(novaTarefa)
                    alert("Tarefa adicionada.")
                } else {
                    alert("Tarefa inválida.")
                }
            } else if (opcao_t === "2") {
                if (tarefas.length === 0) {
                    alert("Nenhuma tarefa pendente.")
                } else {
                    let lista: string = "Escolha o número da tarefa para concluir:\n"
                    for (let i: number = 0; i < tarefas.length; i++) {
                        lista += (i + 1) + ". " + tarefas[i] + "\n"
                    }
                    let escolha: string | null = prompt(lista)
                    if (escolha !== null) {
                        let indice: number = Number(escolha) - 1
                        if (indice >= 0 && indice < tarefas.length) {
                            tarefas.splice(indice, 1);
                            alert("Tarefa concluída e removida.")
                        } else {
                            alert("Número inválido.")
                        }
                    }
                }
            } else if (opcao_t === "3") {
                if (tarefas.length === 0) {
                    alert("Nenhuma tarefa pendente.")
                } else {
                    let lista: string = "Tarefas pendentes:\n";
                    for (let i: number = 0; i < tarefas.length; i++) {
                        lista += (i + 1) + ". " + tarefas[i] + "\n"
                    }
                    alert(lista)
                }
            } else if (opcao_t === "4") {
                alert("Encerrando organizador de tarefas.")
                return
            } else {
                alert("Opção inválida. Tente novamente.")
            }
        }
    }

    gerenciar_tarefas()`,

    //Q6
    'btn-q25': `6 - Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
a) Pedir os nomes das pessoas usando o Prompt e o método push();
b) Apresentar os nomes digitados;
c) Ordenar o vetor usando o sort();
d) Apresentar os nomes inseridos de forma ordenada.

    alert("Armazena 15 nomes de pessoas")
    let nomes: string[] = []


    for (let i: number = 1; i <= 15; i++) {
        let nome: string | null = prompt("Digite o " + i + "º nome:")
        if (nome !== null) {
            nomes.push(nome)
        } else {
            nomes.push("")
        }
    }


    let original: string = "Ordem original:\n" + nomes.join("\n")
    alert(original)


    nomes.sort()


    let ordenado: string = "Ordem alfabética:\n" + nomes.join("\n")
    alert(ordenado)`,

    //Q7
    'btn-q26': `7 - Lista de Presença

1. Crie um array chamado presenca que aceite apenas strings.
2. Adicione 5 nomes de alunos.
3. Tente adicionar um número e observe o erro do compilador.
4. Use um loop para imprimir cada nome em letras maiúsculas.

    alert("Lista de Presença")
    let presenca: string[] = []

   
    for (let i: number = 1; i <= 5; i++) {
        let nome: string | null = prompt("Digite o nome do " + i + "º aluno:")
        if (nome !== null) {
            presenca.push(nome)
        } else {
            presenca.push("")
        }
    }

    alert("Lista de presença adicionada com sucesso!")


    let listaMaiuscula: string = "Lista de presença (maiúsculas):\n"
    for (let i: number = 0; i < presenca.length; i++) {
        listaMaiuscula += presenca[i].toUpperCase() + "\n"
    }
    alert(listaMaiuscula)`,

    //Q8
    'btn-q27': `8 - Boletim Híbrido
1. Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não
Avaliado).
2. Insira os valores: 8.5, 10, "N.A", 7.2.
3. Crie uma lógica que percorra o array e:
● Se for um número, imprima: "Nota: [valor]".
● Se for "N.A", imprima:"O aluno não realizou a prova".


    alert("Boletim Híbrido")
    let notasSemestre: (number | string)[] = []


    notasSemestre.push(8.5)
    notasSemestre.push(10)
    notasSemestre.push("N.A")
    notasSemestre.push(7.2)

    let resultado: string = ""
    for (let i: number = 0; i < notasSemestre.length; i++) {
        let elemento: number | string = notasSemestre[i]
        if (elemento === "N.A") {
            resultado += "O aluno não realizou a prova\n"
        } else {
            resultado += "Nota: " + elemento + "\n"
        }
    }

    alert(resultado)`,

    //Q9
    'btn-q28': `9 - Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
inicio e fim. A função deve seguir os seguintes requisitos:
● Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
● Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
contidos nesse intervalo (inclusive o início e o fim).
● Durante a iteração, armazene todos os números do intervalo em um array.
● Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
a lista criada.
● Imprima no console apenas os números que são múltiplos e divisores da sua idade.
● Ao final, exiba a quantidade total de números que foram impressos.

    alert("Multiplos de 3 no intervalo de números")
    let inicio: number = Number(prompt("Digite o número inicial: "))
    let fim: number = Number(prompt("Digite o número final: "))


    let intervalo: number[] = []
    for (let i: number = inicio; i <= fim; i++) {
        intervalo.push(i)
    }


    let multiplos: string = "Múltiplos de 3:\n"
    for (let i: number = 0; i < intervalo.length; i++) {
        if (intervalo[i] % 3 === 0) {
            multiplos += intervalo[i] + "\n"
        }
    }

    alert(multiplos)`,

    //Q10
    'btn-q29': ``,

    //POO

    //Q1
    'btn-q30': String.raw`// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function poo_1 (){

class Bola {

     cor: string
     circunferencia: number
     material: string

    constructor(cor:string, circunferencia:number, material:string){
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }
    trocarCor(novaCor:string): void{
        this.cor = novaCor
    }
    mostraCor(): string{
        return this.cor
    }
}



    let bola_1:Bola = new Bola("vermelha",65,"couro")

     alert(\`A bola tem as características:\nCor: \${bola_1.mostraCor()}\nCircunferência: \${bola_1.circunferencia}cm\nMaterial: \${bola_1.material}\`)`,


    //Q2
    'btn-q31': String.raw`// Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;


class Quadrado{

   tamanho_do_lado: number

    constructor(tamanho_do_lado:number){
        this.tamanho_do_lado = tamanho_do_lado
    }

    mudar_valor_do_lado (novo_Valor:number){
            this.tamanho_do_lado = novo_Valor
    }

    retornar_valor_do_lado (){
       return this.tamanho_do_lado

    }

    calcular_area (){
        return this.tamanho_do_lado * this.tamanho_do_lado
    }
    
}

let quadrado:Quadrado = new Quadrado (10)

 alert(
        \`Características do Quadrado:\n- Tamanho do lado: \${quadrado.retornar_valor_do_lado()}\n- Área total: \${quadrado.calcular_area()}\`
    )
}`,

    //Q3
    'btn-q32': String.raw`// Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos: Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

    class Retangulo {
        base: number
        altura: number

        constructor(base: number, altura: number) {
            this.base = base
            this.altura = altura
        }

        mudar_lados(nova_base: number, nova_altura: number) {
            this.base = nova_base
            this.altura = nova_altura
        }

        retornar_lados() {
            return { base: this.base, altura: this.altura }
        }

        calcular_area() {
            return this.base * this.altura
        }

        calcular_perimetro() {
            return 2 * (this.base + this.altura)
        }
    }

    let retangulo = new Retangulo(10, 5)
    let lados = retangulo.retornar_lados()


    alert(
        \`Características do Retângulo:\n- Base: \${lados.base}\n- Altura: \${lados.altura}\n- Área: \${retangulo.calcular_area()}\n- Perímetro: \${retangulo.calcular_perimetro()}\`
    )`,

    //Q4
    'btn-q33': String.raw` // 4 - Crie um programa que utilize a classe Retângulo (da questão anterior).
// Ele deve pedir ao usuário que informe as medidas de um local (comprimento e largura).
// Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos (área)
// e de rodapés (perímetro) necessárias para o local.

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
)`,
    //Q5
    'btn-q34': String.raw`// 5 - Classe Pessoa: Crie uma classe que modele uma pessoa:
// Atributos: nome, idade, peso e altura
// Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.

class Pessoa {
    nome: string
    idade: number
    peso: number
    altura: number

    constructor(nome: string, idade: number, peso: number, altura: number) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    envelhecer(): void {
        if (this.idade < 21) {
            this.altura += 0.5
        }
        this.idade++
    }

    engordar(kg: number): void {
        this.peso += kg
    }

    emagrecer(kg: number): void {
        this.peso -= kg
    }

    crescer(cm: number): void {
        this.altura += cm
    }
}

let nome = prompt("Nome:")
if (nome === null) return
let idade = Number(prompt("Idade:"))
let peso = Number(prompt("Peso (kg):"))
let altura = Number(prompt("Altura (cm):"))

let pessoa = new Pessoa(nome, idade, peso, altura)

alert("Dados iniciais:\nNome: " + pessoa.nome + "\nIdade: " + pessoa.idade + "\nPeso: " + pessoa.peso + " kg\nAltura: " + pessoa.altura + " cm")
pessoa.envelhecer()
alert("Após envelhecer 1 ano:\nIdade: " + pessoa.idade + "\nAltura: " + pessoa.altura + " cm")

pessoa.engordar(5)
alert("Após engordar 5 kg:\nPeso: " + pessoa.peso + " kg")`,
    //Q6
    'btn-q35': String.raw` // 6 - Classe Conta Corrente: Crie uma classe para implementar uma conta corrente.
// Atributos: número da conta, nome do correntista e saldo.
// Métodos: alterarNome, depósito e saque.
// No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.

class ContaCorrente {
    private _numero: string
    private _nome: string
    private _saldo: number

    constructor(numero: string, nome: string, saldo: number = 0) {
        this._numero = numero
        this._nome = nome
        this._saldo = saldo
    }

    get saldo(): number { return this._saldo }
    get nome(): string { return this._nome }
    get numero(): string { return this._numero}

    set nome(n: string) {
        if (n.length > 0) this._nome = n
    }

    depositar(valor: number): void {
        if (valor > 0) this._saldo += valor
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor
        } else {
            alert("Saldo insuficiente ou valor inválido.")
        }
    }
}

let numConta = prompt("Número da conta:")
if(numConta === null) return
let nomeTitular = prompt("Nome do titular:")
if(nomeTitular === null) return
let conta = new ContaCorrente(numConta, nomeTitular)

alert("Conta criada com sucesso!\nNúmero: " + conta.numero + "\nTitular: " + conta.nome)

let opcao = prompt("Escolha:\n1 - Depositar\n2 - Sacar\n3 - Ver Saldo\n4 - Sair")
if (opcao === "1") {
    let valor = Number(prompt("Valor para depósito:"))
    conta.depositar(valor)
    alert("Novo saldo: R$ " + conta.saldo.toFixed(2))
} else if (opcao === "2") {
    let valor = Number(prompt("Valor para saque:"))
    conta.sacar(valor);
    alert("Novo saldo: R$ " + conta.saldo.toFixed(2))
} else if (opcao === "3") {
    alert("Saldo atual: R$ " + conta.saldo.toFixed(2))
} else {
    alert("Saindo...")
}`,
    //Q7
    'btn-q36': String.raw`// 7 - Uma empresa quer cadastrar funcionários e aplicar aumento salarial.
// O sistema deve pedir nome, cargo e salário.
// Crie um método que receba um percentual de aumento e atualize o salário do funcionário,
// exibindo o seu nome e novo valor.

class Funcionario {
    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    aplicarAumento(percentual: number): void {
        this.salario += this.salario * (percentual / 100)
    }

    exibir(): string {
        return "Nome: " + this.nome + "\nCargo: " + this.cargo + "\nSalário: R$ " + this.salario.toFixed(2)
    }
}

let nome = prompt("Nome do funcionário:")
if(nome === null) return
let cargo = prompt("Cargo:")
if(cargo === null) return
let salario = Number(prompt("Salário atual (R$):"))

let func = new Funcionario(nome, cargo, salario)

let percentual = Number(prompt("Percentual de aumento (%):"))
func.aplicarAumento(percentual)

alert("Dados atualizados:\n" + func.exibir())`,
    //Q8
    'btn-q37': String.raw`// 8 - Uma empresa precisa de um sistema simples para cadastrar seus funcionários.
// O sistema deve solicitar ao usuário o nome, o cargo e o salário de vários funcionários.
// Para cada funcionário cadastrado, deve ser criado um objeto que armazene essas informações.
// Ao final, o sistema deve exibir um resumo de todos os funcionários cadastrados,
// utilizando um método da classe.

class Funcionario {
    nome: string
    cargo: string
    salario: number

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    resumo(): string {
        return "Nome: " + this.nome + "\nCargo: " + this.cargo + "\nSalário: R$ " + this.salario.toFixed(2)
    }
}

let nome = prompt("Nome do funcionário:")
if(nome === null) return
let cargo = prompt("Cargo:")
if(cargo === null) return
let salario = Number(prompt("Salário (R$):"))

let func = new Funcionario(nome, cargo, salario)
alert("Resumo do cadastro:\n" + func.resumo())`,
    //Q9
    'btn-q38': String.raw`// Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

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
alert("Dados do produto:\n" + produto.exibir())  `,
    //Q10
    'btn-q39': String.raw`// // Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// // A. Atributos: Nome, Fome, Saúde e Idade
// // B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// // C. Retornar Nome, Fome, Saúde e Idade

// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

class Tamagushi {
    nome: string
    fome: number
    saude: number
    idade: number

    constructor(nome: string, fome: number, saude: number, idade: number) {
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

    // Métodos para alterar
    alterarNome(novoNome: string): void { this.nome = novoNome; }
    alterarFome(novaFome: number): void { this.fome = novaFome; }
    alterarSaude(novaSaude: number): void { this.saude = novaSaude }
    alterarIdade(novaIdade: number): void { this.idade = novaIdade }

    // Métodos para retornar
    retornarNome(): string { return this.nome }
    retornarFome(): number { return this.fome }
    retornarSaude(): number { return this.saude }
    retornarIdade(): number { return this.idade }

    // Campo calculado (Humor)
    humor(): string {
        let media = (this.fome + this.saude) / 2
        if (media >= 8) return "Feliz ;)"
        else if (media >= 5) return "Neutro :|"
        else return "Triste :("
    }
}

let nome = prompt("Nome do bichinho:")
if(nome === null) return
let fome = Number(prompt("Fome (0 a 10):"))
let saude = Number(prompt("Saúde (0 a 10):"))
let idade = Number(prompt("Idade:"))

let bichinho = new Tamagushi(nome, fome, saude, idade)

alert(
    "Dados do Tamagushi:\n" +
    "Nome: " + bichinho.retornarNome() + "\n" +
    "Fome: " + bichinho.retornarFome() + "\n" +
    "Saúde: " + bichinho.retornarSaude() + "\n" +
    "Idade: " + bichinho.retornarIdade() + "\n" +
    "Humor: " + bichinho.humor()
)`,
    //Q11
    'btn-q40': String.raw`// 11 - Uma lanchonete quer registrar pedidos dos clientes.
// O sistema deve solicitar o nome do cliente, o nome do pedido e o valor.
// Crie um método que exiba o resumo do pedido e o valor total.

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
alert("Resumo do pedido:\n" + objPedido.resumo())`,
    //Q12
    'btn-q41': String.raw`// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação.

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
alert("Resumo da locação:\n" + locacao.resumo())`,
    //Q13
    'btn-q42': String.raw`// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado ou
// reprovado.

class Aluno {
    nome: string
    nota1: number
    nota2: number

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2
    }

    situacao(): string {
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado"
    }
}

let nome = prompt("Nome do aluno:")
if(nome === null) return
let n1 = Number(prompt("Nota 1:"))
let n2 = Number(prompt("Nota 2:"))

let aluno = new Aluno(nome, n1, n2)
alert("Aluno: " + aluno.nome +
      "\nMédia: " + aluno.calcularMedia().toFixed(1) +
      "\nSituação: " + aluno.situacao())`,
    //Q14
    'btn-q43': String.raw`// Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.


class Livro {
    titulo: string
    autor: string
    ano: number
    disponivel: boolean

    constructor(titulo: string, autor: string, ano: number, disponivel: boolean = true) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = disponivel
    }

    emprestar(): void {
        if (this.disponivel) {
            this.disponivel = false
            alert("Livro emprestado com sucesso!")
        } else {
            alert("Livro indisponível!")
        }
    }

    devolver(): void {
        this.disponivel = true
        alert("Livro devolvido!")
    }

    exibir(): string {
        return "Título: " + this.titulo +
               "\nAutor: " + this.autor +
               "\nAno: " + this.ano +
               "\nDisponível: " + (this.disponivel ? "Sim" : "Não")
    }
}

let titulo = prompt("Título do livro:")
if(titulo === null) return
let autor = prompt("Autor:")
if(autor === null) return
let ano = Number(prompt("Ano de publicação:"))

let livro = new Livro(titulo, autor, ano)
alert("Livro cadastrado:\n" + livro.exibir())

let opcao = prompt("1 - Emprestar\n2 - Devolver\n3 - Ver status")
if (opcao === "1") {
    livro.emprestar()
    alert("Status atual:\n" + livro.exibir())
} else if (opcao === "2") {
    livro.devolver()
    alert("Status atual:\n" + livro.exibir())
} else {
    alert("Status:\n" + livro.exibir())
} `,
    //Q15
    'btn-q44': String.raw`// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionario como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

class Funcionario {
    nome: string
    salarioBase: number

    constructor(nome: string, salarioBase: number = 0) {
        this.nome = nome
        this.salarioBase = salarioBase
    }

    calcularSalario(): number {
        return this.salarioBase
    }
}

class FuncionarioHorista extends Funcionario {
    horas: number
    valorHora: number

    constructor(nome: string, horas: number, valorHora: number) {
        super(nome)
        this.horas = horas
        this.valorHora = valorHora
    }

    calcularSalario(): number {
        return this.horas * this.valorHora
    }
}

class FuncionarioAssalariado extends Funcionario {
    bonus: number
    constructor(nome: string, salarioBase: number, bonus: number) {
        super(nome, salarioBase)
        this.bonus = bonus
    }

    calcularSalario(): number {
        return this.salarioBase + this.bonus
    }
}

let tipo = prompt("1 - Horista\n2 - Assalariado")
let nome = prompt("Nome:")
if(nome === null) return

if (tipo === "1") {
    let h = Number(prompt("Horas:"))
    let vh = Number(prompt("Valor hora:"))
    let func = new FuncionarioHorista(nome, h, vh)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
} else {
    let sb = Number(prompt("Salário base:"))
    let b = Number(prompt("Bônus:"))
    let func = new FuncionarioAssalariado(nome, sb, b)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
}`,
    //Q16
    'btn-q45': String.raw`// 16 - Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. Mamíferos têm tipo de
// alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.

class Animal {
    nome: string
    especie: string
    idade: number

    constructor(nome: string, especie: string, idade: number) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }

    emitirSom(): string {
        return "Som genérico"
    }
}

class Mamifero extends Animal {
    alimentacao: string

    constructor(nome: string, especie: string, idade: number, alimentacao: string) {
        super(nome, especie, idade)
        this.alimentacao = alimentacao
    }

    emitirSom(): string {
        return "Som de mamífero (ex: rugido)"
    }
}

class Ave extends Animal {
    migratoria: boolean;

    constructor(nome: string, especie: string, idade: number, migratoria: boolean) {
        super(nome, especie, idade)
        this.migratoria = migratoria
    }

    emitirSom(): string {
        return "Som de ave (ex: canto)"
    }
}

let leao = new Mamifero("Leão", "Panthera leo", 5, "carnívoro")
let papagaio = new Ave("Papagaio", "Amazona", 3, false)

alert(leao.nome + " faz: " + leao.emitirSom())
alert(papagaio.nome + " faz: " + papagaio.emitirSom())`,
     //Q17
    'btn-q46': String.raw`
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos.

class AlunoFrequencia {
    nome: string
    matricula: string
    presencas: number
    faltas: number

    constructor(nome: string, matricula: string) {
        this.nome = nome
        this.matricula = matricula
        this.presencas = 0
        this.faltas = 0
    }

    registrarPresenca(): void {
        this.presencas++
    }

    registrarFalta(): void {
        this.faltas++
    }

    resumo(): string {
        return "Aluno: " + this.nome +
               "\nMatrícula: " + this.matricula +
               "\nPresenças: " + this.presencas +
               "\nFaltas: " + this.faltas
    }
}

let nome = prompt("Nome do aluno:")
if(nome === null) return
let mat = prompt("Matrícula:")
if(mat === null) return
let aluno = new AlunoFrequencia(nome, mat)

for (let i = 1; i <= 5; i++) {
    let status = prompt("Dia " + i + " - Presente? (S/N)")
    if(status === null) return
    if (status.toUpperCase() === "S") {
        aluno.registrarPresenca()
    } else {
        aluno.registrarFalta()
    }
}

alert("Relatório de frequência:\n" + aluno.resumo())
}`,
     //Q18
    'btn-q47': String.raw`// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos necessita de uma ferramenta para calcular a folha salarial dos
// colaboradores. Todo colaborador possui nome e um salário base privado. Um Professor recebe um
// acréscimo de 20% sobre o salário base por dedicação exclusiva. Um Técnico Administrativo recebe
// um valor fixo extra de auxílio-alimentação. O programa deve rodar em um laço solicitando o cadastro
// dos funcionários do mês. Após coletar todos os dados, o software deve rodar a lista utilizando uma
// estrutura de repetição, acionar o método de cálculo salarial específico de cada um e exibir o custo
// total que a instituição terá naquele mês.

class Funcionario {
    nome: string
    private _salarioBase: number

    constructor(nome: string, salarioBase: number) {
        this.nome = nome
        this._salarioBase = salarioBase
    }

    get salarioBase(): number { return this._salarioBase; }

    calcularSalario(): number {
        return this._salarioBase
    }
}

class Professor extends Funcionario {
    constructor(nome: string, salarioBase: number) {
        super(nome, salarioBase)
    }

    calcularSalario(): number {
        return this.salarioBase * 1.5
    }
}

class Tecnico extends Funcionario {
    auxilioAlimentacao: number

    constructor(nome: string, salarioBase: number, auxilio: number) {
        super(nome, salarioBase)
        this.auxilioAlimentacao = auxilio
    }

    calcularSalario(): number {
        return this.salarioBase + this.auxilioAlimentacao
    }
}

let tipo = prompt("1 - Professor\n2 - Técnico")
let nome = prompt("Nome:")
if(nome === null) return
let salarioBase = Number(prompt("Salário base:"))

if (tipo === "1") {
    let func = new Professor(nome, salarioBase);
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
} else {
    let aux = Number(prompt("Auxílio alimentação:"))
    let func = new Tecnico(nome, salarioBase, aux)
    alert("Salário: R$ " + func.calcularSalario().toFixed(2))
}`,
     //Q19
    'btn-q48': String.raw`// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

class Sensor {
    codigo: string
    leitura: number

    constructor(codigo: string, leitura: number) {
        this.codigo = codigo
        this.leitura = leitura
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Leitura: " + this.leitura
    }

    alerta(): boolean {
        return false
    }
}

class SensorTemperatura extends Sensor {
    constructor(codigo: string, leitura: number) {
        super(codigo, leitura)
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Temperatura: " + this.leitura + " °C"
    }

    alerta(): boolean {
        return this.leitura > 40
    }
}

class SensorPressao extends Sensor {
    constructor(codigo: string, leitura: number) {
        super(codigo, leitura)
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Pressão: " + this.leitura + " atm"
    }

    alerta(): boolean {
        return this.leitura > 5
    }
}

let cod = prompt("Código do sensor:")
if(cod === null) return
let tipoSensor = prompt("1 - Temperatura\n2 - Pressão")
let leitura = Number(prompt("Leitura:"))

let sensor: Sensor
if (tipoSensor === "1") {
    sensor = new SensorTemperatura(cod, leitura)
} else {
    sensor = new SensorPressao(cod, leitura)
}

alert("Dados do sensor:\n" + sensor.exibir() + "\nAlerta: " + (sensor.alerta() ? "SIM" : "NÃO"))`,
     //Q20
    'btn-q49': String.raw`// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

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
}`,
     //Q21
    'btn-q50': String.raw`// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O

// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

class Projeto {
    private _titulo: string
    private _coordenador: string
    private _nota: number

    constructor(titulo: string, coordenador: string, nota: number) {
        this._titulo = titulo
        this._coordenador = coordenador
        this._nota = nota
    }

    get titulo(): string { return this._titulo }
    get coordenador(): string { return this._coordenador }
    get nota(): number { return this._nota }

    set nota(valor: number) {
        if (valor >= 0 && valor <= 10) {
            this._nota = valor
        } else {
            alert("Nota inválida! Deve ser entre 0 e 10.")
        }
    }
}

let titulo = prompt("Título do projeto:")
if(titulo === null) return
let coordenador = prompt("Coordenador:")
if(coordenador === null) return
let nota = Number(prompt("Nota (0 a 10):"))

let projeto = new Projeto(titulo, coordenador, nota);
alert("Projeto cadastrado:\nTítulo: " + projeto.titulo +
      "\nCoordenador: " + projeto.coordenador +
      "\nNota: " + projeto.nota)`,
     //Q22
    'btn-q51': String.raw`// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

class Veiculo {
    placa: string
    km: number

    constructor(placa: string, km: number) {
        this.placa = placa
        this.km = km
    }

    precisaRevisao(): boolean {
        return false
    }
}

class Onibus extends Veiculo {
    constructor(placa: string, km: number) {
        super(placa, km)
    }

    precisaRevisao(): boolean {
        return this.km >= 10000
    }
}

class Ambulancia extends Veiculo {
    constructor(placa: string, km: number) {
        super(placa, km)
    }

    precisaRevisao(): boolean {
        return this.km >= 5000
    }
}

let placa = prompt("Placa do veículo:")
if(placa === null) return
let km = Number(prompt("Quilometragem atual:"))
let tipo = prompt("1 - Ônibus (10.000 km)\n2 - Ambulância (5.000 km)")

let veiculo: Veiculo
if (tipo === "1") {
    veiculo = new Onibus(placa, km)
} else {
    veiculo = new Ambulancia(placa, km)
}

alert("Placa: " + veiculo.placa +
      "\nKM: " + veiculo.km +
      "\nPrecisa revisão? " + (veiculo.precisaRevisao() ? "SIM" : "NÃO"))`,
     //Q23
    'btn-q52': String.raw`// Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

class Produto {
    codigo: number
    nome: string
    protected _precoCusto: number

    constructor(codigo: number, nome: string, precoCusto: number) {
        this.codigo = codigo
        this.nome = nome
        this._precoCusto = precoCusto
    }

    get precoCusto(): number { return this._precoCusto}

    calcularPrecoFinal(): number {
        return this._precoCusto
    }
}

class Perecivel extends Produto {
    dataValidade: string

    constructor(codigo: number, nome: string, precoCusto: number, dataValidade: string) {
        super(codigo, nome, precoCusto)
        this.dataValidade = dataValidade
    }

    calcularPrecoFinal(): number {

        return this._precoCusto * 0.70
    }
}

class NaoPerecivel extends Produto {
    constructor(codigo: number, nome: string, precoCusto: number) {
        super(codigo, nome, precoCusto)
    }

    calcularPrecoFinal(): number {
        return this._precoCusto
    }
}

let cod = Number(prompt("Código:"))
let nome = prompt("Nome:")
if(nome === null) return
let preco = Number(prompt("Preço de custo:"))
let tipo = prompt("1 - Perecível\n2 - Não Perecível")

let produto: Produto
if (tipo === "1") {
    let data = prompt("Data de validade:")
    if(data === null) return
    produto = new Perecivel(cod, nome, preco, data)
} else {
    produto = new NaoPerecivel(cod, nome, preco)
}

alert("Produto: " + produto.nome +
      "\nPreço final: R$ " + produto.calcularPrecoFinal().toFixed(2))`,
     //Q24
    'btn-q53': String.raw`// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.

class Tarefa {
    descricao: string
    concluida: boolean

    constructor(descricao: string) {
        this.descricao = descricao
        this.concluida = false
    }

    concluir(): void {
        this.concluida = true
    }
}

class TarefaAcademica extends Tarefa {
    disciplina: string

    constructor(descricao: string, disciplina: string) {
        super(descricao)
        this.disciplina = disciplina
    }
}

class TarefaPessoal extends Tarefa {
    prioridade: number

    constructor(descricao: string, prioridade: number) {
        super(descricao)
        this.prioridade = prioridade
    }
}

let tipo = prompt("1 - Acadêmica\n2 - Pessoal")
let desc = prompt("Descrição:")
if(desc === null) return

if (tipo === "1") {
    let disc = prompt("Disciplina:")
    if(disc === null) return
    let tarefa = new TarefaAcademica(desc, disc)
    alert("Tarefa criada:\n" + tarefa.descricao + " - " + tarefa.disciplina)
    tarefa.concluir()
    alert("Status: " + (tarefa.concluida ? "Concluída" : "Pendente"))
} else {
    let prioridade = Number(prompt("Prioridade (1 a 5):"))
    let tarefa = new TarefaPessoal(desc, prioridade)
    alert("Tarefa criada:\n" + tarefa.descricao + " - Prioridade: " + tarefa.prioridade)
    tarefa.concluir()
    alert("Status: " + (tarefa.concluida ? "Concluída" : "Pendente"))
}`,
     //Q25
    'btn-q54':  String.raw`// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte a resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.

class Assinatura {
    email: string
    valor: number

    constructor(email: string, valor: number) {
        this.email = email
        this.valor = valor
    }

    detalhes(): string {
        return "Email: " + this.email + "\nValor: R$ " + this.valor.toFixed(2)
    }
}

class AssinaturaPadrao extends Assinatura {
    constructor(email: string) {
        super(email, 29.90)
    }

    detalhes(): string {
        return super.detalhes() + "\nTelas: 2"
    }
}

class AssinaturaPremium extends Assinatura {
    constructor(email: string) {
        super(email, 49.90)
    }

    detalhes(): string {
        return super.detalhes() + "\nTelas: 4\nResolução: 4K"
    }
}

let email = prompt("Email:")
if(email === null) return
let tipo = prompt("1 - Padrão (R$29,90)\n2 - Premium (R$49,90)")

let assinatura: Assinatura
if (tipo === "1") {
    assinatura = new AssinaturaPadrao(email)
} else {
    assinatura = new AssinaturaPremium(email)
}

alert("Detalhes da assinatura:\n" + assinatura.detalhes())`,
     //Q26
    'btn-q55': String.raw`// Simulador de Contas Bancárias Cooperativas

// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

class ContaCooperativa {
    private _numero: string
    private _titular: string
    private _saldo: number
    private _taxaAdministracao: number

    constructor(numero: string, titular: string, saldo: number = 0, taxa: number = 0.02) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
        this._taxaAdministracao = taxa
    }

    get numero(): string { return this._numero }
    get titular(): string { return this._titular }
    get saldo(): number { return this._saldo }

    depositar(valor: number): void {
        if (valor > 0) this._saldo += valor
    }

    sacar(valor: number): void {
        let taxa = valor * this._taxaAdministracao
        let total = valor + taxa
        if (total <= this._saldo) {
            this._saldo -= total
        } else {
            alert("Saldo insuficiente.")
        }
    }
}

let num = prompt("Número da conta:")
if(num === null) return
let titular = prompt("Titular:")
if(titular === null) return
let conta = new ContaCooperativa(num, titular)

alert("Conta criada: " + conta.numero + " - " + conta.titular)
let valor = Number(prompt("Depósito inicial:"))
conta.depositar(valor)
alert("Saldo: R$ " + conta.saldo.toFixed(2))

let saque = Number(prompt("Valor para saque (com taxa de 2%):"))
conta.sacar(saque);
alert("Saldo após saque: R$ " + conta.saldo.toFixed(2))`,
     //Q27
    'btn-q56': String.raw`// Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.

class Equipamento {
    tombamento: string
    descricao: string

    constructor(tombamento: string, descricao: string) {
        this.tombamento = tombamento
        this.descricao = descricao
    }

    ficha(): string {
        return "Tombamento: " + this.tombamento + "\nDescrição: " + this.descricao
    }
}

class Computador extends Equipamento {
    ram: number

    constructor(tombamento: string, descricao: string, ram: number) {
        super(tombamento, descricao)
        this.ram = ram
    }

    ficha(): string {
        return super.ficha() + "\nRAM: " + this.ram + " GB"
    }
}

class Roteador extends Equipamento {
    portas: number

    constructor(tombamento: string, descricao: string, portas: number) {
        super(tombamento, descricao)
        this.portas = portas
    }

    ficha(): string {
        return super.ficha() + "\nPortas: " + this.portas
    }
}

let tomb = prompt("Número de tombamento:")
if(tomb === null) return
let desc = prompt("Descrição:")
if(desc === null) return
let tipo = prompt("1 - Computador\n2 - Roteador")

let equip: Equipamento
if (tipo === "1") {
    let ram = Number(prompt("Quantidade de RAM (GB):"))
    equip = new Computador(tomb, desc, ram)
} else {
    let portas = Number(prompt("Quantidade de portas:"))
    equip = new Roteador(tomb, desc, portas)
}

alert("Ficha do equipamento:\n" + equip.ficha())`,
     //Q28
    'btn-q57': String.raw`// Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

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
      "\nValor total: R$ " + total.toFixed(2))`,
     //Q29
    'btn-q58': String.raw`// Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.

class Obra {
    titulo: string
    autor: string

    constructor(titulo: string, autor: string) {
        this.titulo = titulo
        this.autor = autor
    }

    calcularMulta(dias: number): number {
        return 0
    }

    penalidade(dias: number): string {
        return "Sem penalidade."
    }
}

class LivroFisico extends Obra {
    constructor(titulo: string, autor: string) {
        super(titulo, autor)
    }

    calcularMulta(dias: number): number {
        return dias * 2.50
    }

    penalidade(dias: number): string {
        return "Multa: R$ " + this.calcularMulta(dias).toFixed(2)
    }
}

class ArtigoDigital extends Obra {
    constructor(titulo: string, autor: string) {
        super(titulo, autor)
    }

    calcularMulta(dias: number): number {
        return 0
    }

    penalidade(dias: number): string {
        return "Advertência virtual emitida."
    }
}

let titulo = prompt("Título:")
if(titulo === null) return
let autor = prompt("Autor:")
if(autor === null) return
let tipo = prompt("1 - Livro Físico\n2 - Artigo Digital")
let dias = Number(prompt("Dias de atraso:"))

let obra: Obra
if (tipo === "1") {
    obra = new LivroFisico(titulo, autor)
} else {
    obra = new ArtigoDigital(titulo, autor)
}

alert("Obra: " + obra.titulo + " - " + obra.autor +
      "\nPenalidade: " + obra.penalidade(dias))`,
     //Q30
    'btn-q59': String.raw`// O Sistema de Bilhetagem de Transporte Intermunicipal

// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.


class Passagem {
    private _nome: string
    private _cpf: string
    private _valorBase: number

    constructor(nome: string, cpf: string, valorBase: number) {
        this._nome = nome
        this._cpf = cpf
        this._valorBase = valorBase
    }

    get nome(): string { return this._nome }
    get cpf(): string { return this._cpf }
    get valorBase(): number { return this._valorBase }

    calcularValor(): number {
        return this._valorBase
    }

    resumo(): string {
        return "Nome: " + this._nome +
               "\nCPF: " + this._cpf +
               "\nValor: R$ " + this.calcularValor().toFixed(2)
    }
}

class PassagemComum extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase)
    }

    calcularValor(): number {
        return this.valorBase
    }
}

class PassagemEstudantil extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase)
    }

    calcularValor(): number {
        return this.valorBase * 0.50
    }
}

let nome = prompt("Nome do passageiro:")
if(nome === null) return
let cpf = prompt("CPF:")
if(cpf === null) return
let valor = Number(prompt("Valor base da passagem:"))
let tipo = prompt("1 - Comum\n2 - Estudante (50%)")

let passagem: Passagem
if (tipo === "2") {
    passagem = new PassagemEstudantil(nome, cpf, valor)
} else {
    passagem = new PassagemComum(nome, cpf, valor)
}

alert("Resumo da passagem:\n" + passagem.resumo())`,
    

    
}

//LGICA DO TERMINAL COPIA CODIGO
const terminalPre = document.getElementById('terminalCode') as HTMLPreElement;
const btnCopiar = document.getElementById('btnCopiarCodigo') as HTMLButtonElement;

//exibir o cdigo no terminal
function exibirCodigo(idBotao: string) {
    const codigo = codigosQuestoes[idBotao];
    if (codigo && codigo.trim() !== '') {
        if (typeof hljs !== 'undefined') {
            const highlighted = hljs.highlightAuto(codigo).value;
            terminalPre.innerHTML = `<code>${highlighted}</code>`;
        } else {
            terminalPre.textContent = codigo;
        }
    } else {
        terminalPre.innerHTML = `<code>// Código ainda não adicionado...</code>`;
    }
}

// Botão copiar
btnCopiar.addEventListener('click', async () => {
    const codigo = terminalPre.textContent || '';
    if (codigo && !codigo.includes('Código ainda não adicionado')) {
        await navigator.clipboard.writeText(codigo);
        btnCopiar.textContent = '✓ Copiado!';
        setTimeout(() => { btnCopiar.textContent = '📋 Copiar'; }, 2000);
    } else {
        alert('Não há código válido para copiar.');
    }
});


// executa a função/exibe o código correspondente

// Condicional
document.getElementById('btn-q1')?.addEventListener('click', () => { cond_1(); exibirCodigo('btn-q1'); });
document.getElementById('btn-q2')?.addEventListener('click', () => { cond_2(); exibirCodigo('btn-q2'); });
document.getElementById('btn-q3')?.addEventListener('click', () => { cond_3(); exibirCodigo('btn-q3'); });
document.getElementById('btn-q4')?.addEventListener('click', () => { cond_4(); exibirCodigo('btn-q4'); });

// Funções
document.getElementById('btn-q5')?.addEventListener('click', () => { fun_1(); exibirCodigo('btn-q5'); });
document.getElementById('btn-q6')?.addEventListener('click', () => { fun_2(); exibirCodigo('btn-q6'); });
document.getElementById('btn-q7')?.addEventListener('click', () => { fun_3(); exibirCodigo('btn-q7'); });
document.getElementById('btn-q8')?.addEventListener('click', () => { fun_4(); exibirCodigo('btn-q8'); });
document.getElementById('btn-q9')?.addEventListener('click', () => { fun_5(); exibirCodigo('btn-q9'); });
document.getElementById('btn-q10')?.addEventListener('click', () => { fun_6(); exibirCodigo('btn-q10'); });
document.getElementById('btn-q11')?.addEventListener('click', () => { fun_7(); exibirCodigo('btn-q11'); });
document.getElementById('btn-q12')?.addEventListener('click', () => { fun_8(); exibirCodigo('btn-q12'); });
document.getElementById('btn-q13')?.addEventListener('click', () => { fun_9(); exibirCodigo('btn-q13'); });
document.getElementById('btn-q14')?.addEventListener('click', () => { fun_10(); exibirCodigo('btn-q14'); });

// Repetição
document.getElementById('btn-q15')?.addEventListener('click', () => { rep_1(); exibirCodigo('btn-q15'); });
document.getElementById('btn-q16')?.addEventListener('click', () => { rep_2(); exibirCodigo('btn-q16'); });
document.getElementById('btn-q17')?.addEventListener('click', () => { rep_3(); exibirCodigo('btn-q17'); });
document.getElementById('btn-q18')?.addEventListener('click', () => { rep_4(); exibirCodigo('btn-q18'); });
document.getElementById('btn-q19')?.addEventListener('click', () => { rep_5(); exibirCodigo('btn-q19'); });

// Array
document.getElementById('btn-q20')?.addEventListener('click', () => { Questao_1(); exibirCodigo('btn-q20'); });
document.getElementById('btn-q21')?.addEventListener('click', () => { Questao_2(); exibirCodigo('btn-q21'); });
document.getElementById('btn-q22')?.addEventListener('click', () => { Questao_3(); exibirCodigo('btn-q22'); });
document.getElementById('btn-q23')?.addEventListener('click', () => { Questao_4(); exibirCodigo('btn-q23'); });
document.getElementById('btn-q24')?.addEventListener('click', () => { Questao_5(); exibirCodigo('btn-q24'); });
document.getElementById('btn-q25')?.addEventListener('click', () => { Questao_6(); exibirCodigo('btn-q25'); });
document.getElementById('btn-q26')?.addEventListener('click', () => { Questao_7(); exibirCodigo('btn-q26'); });
document.getElementById('btn-q27')?.addEventListener('click', () => { Questao_8(); exibirCodigo('btn-q27'); });
document.getElementById('btn-q28')?.addEventListener('click', () => { Questao_9(); exibirCodigo('btn-q28'); });
document.getElementById('btn-q29')?.addEventListener('click', () => { Questao_10(); exibirCodigo('btn-q29'); });


//POO
document.getElementById('btn-q30')?.addEventListener('click', () => { poo_1(); exibirCodigo('btn-q30'); });
document.getElementById('btn-q31')?.addEventListener('click', () => { poo_2(); exibirCodigo('btn-q31'); });
document.getElementById('btn-q32')?.addEventListener('click', () => { poo_3(); exibirCodigo('btn-q32'); });
document.getElementById('btn-q33')?.addEventListener('click', () => { poo_4(); exibirCodigo('btn-q33'); });
document.getElementById('btn-q34')?.addEventListener('click', () => { poo_5(); exibirCodigo('btn-q34'); });
document.getElementById('btn-q35')?.addEventListener('click', () => { poo_6(); exibirCodigo('btn-q35'); });
document.getElementById('btn-q36')?.addEventListener('click', () => { poo_7(); exibirCodigo('btn-q36'); });
document.getElementById('btn-q37')?.addEventListener('click', () => { poo_8(); exibirCodigo('btn-q37'); });
document.getElementById('btn-q38')?.addEventListener('click', () => { poo_9(); exibirCodigo('btn-q38'); });
document.getElementById('btn-q39')?.addEventListener('click', () => { poo_10(); exibirCodigo('btn-q39'); });
document.getElementById('btn-q40')?.addEventListener('click', () => { poo_11(); exibirCodigo('btn-q40'); });
document.getElementById('btn-q41')?.addEventListener('click', () => { poo_12(); exibirCodigo('btn-q41'); });
document.getElementById('btn-q42')?.addEventListener('click', () => { poo_13(); exibirCodigo('btn-q42'); });
document.getElementById('btn-q43')?.addEventListener('click', () => { poo_14(); exibirCodigo('btn-q43'); });
document.getElementById('btn-q44')?.addEventListener('click', () => { poo_15(); exibirCodigo('btn-q44'); });
document.getElementById('btn-q45')?.addEventListener('click', () => { poo_16(); exibirCodigo('btn-q45'); });
document.getElementById('btn-q46')?.addEventListener('click', () => { poo_17(); exibirCodigo('btn-q46'); });
document.getElementById('btn-q47')?.addEventListener('click', () => { poo_18(); exibirCodigo('btn-q47'); });
document.getElementById('btn-q48')?.addEventListener('click', () => { poo_19(); exibirCodigo('btn-q48'); });
document.getElementById('btn-q49')?.addEventListener('click', () => { poo_20(); exibirCodigo('btn-q49'); });
document.getElementById('btn-q50')?.addEventListener('click', () => { poo_21(); exibirCodigo('btn-q50'); });
document.getElementById('btn-q51')?.addEventListener('click', () => { poo_22(); exibirCodigo('btn-q51'); });
document.getElementById('btn-q52')?.addEventListener('click', () => { poo_23(); exibirCodigo('btn-q52'); });
document.getElementById('btn-q53')?.addEventListener('click', () => { poo_24(); exibirCodigo('btn-q53'); });
document.getElementById('btn-q54')?.addEventListener('click', () => { poo_25(); exibirCodigo('btn-q54'); });
document.getElementById('btn-q55')?.addEventListener('click', () => { poo_26(); exibirCodigo('btn-q55'); });
document.getElementById('btn-q56')?.addEventListener('click', () => { poo_27(); exibirCodigo('btn-q56'); });
document.getElementById('btn-q57')?.addEventListener('click', () => { poo_28(); exibirCodigo('btn-q57'); });
document.getElementById('btn-q58')?.addEventListener('click', () => { poo_29(); exibirCodigo('btn-q58'); });
document.getElementById('btn-q59')?.addEventListener('click', () => { poo_30(); exibirCodigo('btn-q59'); });


//DROPDOWN SELETOR
const seletor = document.getElementById('seletorQuestao') as HTMLSelectElement;
seletor.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;
    const btnId = target.value;
    if (btnId) {
        exibirCodigo(btnId);
    }
});