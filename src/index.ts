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
    'btn-q2': `2 - Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
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

    alert('A estação do ano correspondente ao mês $ {mes} é $ {estacao}')`,

//Q3
    'btn-q3': `3 - Crie um programa que solicite dois números e simule um menu de uma calculadora:
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

    alert('Resultado da $ {operacaoNome}: $ {P_entrada} e $ {S_entrada} = $ {resultado}')`,

//Q4
    'btn-q4': `4 - Ler dois valores e imprimir uma das três mensagens a seguir:
● ‘Números iguais’, caso os números sejam iguais;
● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

    alert("Ler dois valores e imprime uma das mensagens: \n‘Números iguais’ \n‘Primeiro é maior’ \n‘Segundo maior’")
    let num1: number = Number(prompt("Digite o primeiro número: "))
    let num2: number = Number(prompt("Digite o segundo número: "))

    if (num1 === num2) {
        alert("Números iguais")
    } else if (num1 > num2) {
        alert("Primeiro é maior")
    } else {
        alert("Segundo maior")
    }`,

//Q1 (FUNÇÃO)
    'btn-q5': `1 - Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
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
    alert('A soma dos elementos contidos no número $ {num_info} é $ {resultado}')`,

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
    'btn-q14': `10 - Calculadora de IMC com Classificação.
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
        alert('Paciente: $ {nome_cliente} \n Status: $ {classificacao}')
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
    'btn-q16': `2 - Desenvolva a tabuada de um número usando for.
    
        alert("Tabuada do número")
    let num: number = Number(prompt("Digite um número para ver sua tabuada: "))
    let tabuada: string = ""

    for (let i: number = 1; i <= 10; i++) {
        tabuada += '$ {num} x $ {i} = $ {num * i}\n'
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
};

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
//DROPDOWN SELETOR
const seletor = document.getElementById('seletorQuestao') as HTMLSelectElement;
seletor.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;
    const btnId = target.value;
    if (btnId) {
        exibirCodigo(btnId);
    }
});






