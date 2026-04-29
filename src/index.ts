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

function impar_Par(valor:number): any {
        if(valor % 2 === 0){
            alert("Número " + valor + " é Par.")
        } else {
            alert("Número " + valor + " é Ímpar.")
        }
    }
    
    let numero: number = Number(prompt("Esse programa retorna se número é par ou ímpar.\\n Informe um número: "))
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

export function fun_1(): void {
    
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
    alert('A soma dos elementos contidos no número $ {num_info} é $ {resultado}')
}`,

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
cadastrados.`,

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
Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.`,

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
● Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.`,

//Q1 (REPETIÇÃO)
    'btn-q15': `1 - Crie um programa que peça números até o usuário digitar 0 e mostre:
● Quantidade de números digitados
● Soma total`,

//Q2
    'btn-q16': `2 - Desenvolva a tabuada de um número usando for.`,

//Q3
    'btn-q17': `3 - Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
programa.
Calcule e imprima:
● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
recebeu;
● O número de funcionários do sexo masculino e feminino cadastrado;
● O percentual de funcionários homens e mulheres cadastrados.`,

//Q4
    'btn-q18': `4 - Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
valor -1 é utilizado como sentinela para fim de leitura.`,

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
● Quantos vendedores atingiram a categoria "Ouro".`,

//Q1 (ARRAY)
    'btn-q20': `1 - Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
a) Números pares
b) Números ímpares
c) Todos os múltiplos de 2,3 e 4
d) Lista reversa`,

//Q2
    'btn-q21': `2 - Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
entrada de dados, faça o seguinte:
a) Mostre a quantidade de notas que foram lidas.
b) Exiba todas as notas na ordem em que foram informadas.
c) Exiba todas as notas na ordem inversa à que foram informadas.
d) Calcule e mostre a soma das notas.
e) Calcule e mostre a média das notas.
f) Calcule e mostre a quantidade de notas acima da média calculada.`,

//Q3
    'btn-q22': `3 - Gerador de Lista de Compras Personalizada
Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
adicionar itens e a quantidade de cada um.
Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
● Permitir que o usuário adicione itens à lista(array) até que ele digite "fim".
● Permitir que o usuário apresente todos os itens da lista.
● Permitir que o usuário apresente quantos itens há na lista.
● Permitir que o usuário remova itens da lista.`,

//Q4
    'btn-q23': `4 - Calculadora de Média do ENEM
Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
A função deve:
● Calcular a média das notas.
● Arredondar a média para duas casas decimais.
● Retornar o valor da média.`,

//Q5
    'btn-q24': `5 - Organizador de Tarefas Diárias
Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
chamada gerenciar_tarefas() que não receba argumentos. A função deve:
a) Permitir que o usuário adicione tarefas a um vetor.
b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
exemplo).
c) Permitir que o usuário exiba todas as tarefas pendentes.
Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
manter o programa rodando até o usuário escolher sair.`,

//Q6
    'btn-q25': `6 - Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
a) Pedir os nomes das pessoas usando o Prompt e o método push();
b) Apresentar os nomes digitados;
c) Ordenar o vetor usando o sort();
d) Apresentar os nomes inseridos de forma ordenada.`,

//Q7
    'btn-q26': `7 - Lista de Presença

1. Crie um array chamado presenca que aceite apenas strings.
2. Adicione 5 nomes de alunos.
3. Tente adicionar um número e observe o erro do compilador.
4. Use um loop para imprimir cada nome em letras maiúsculas.`,

//Q8
    'btn-q27': `8 - Boletim Híbrido
1. Crie um array chamado notasSemestre que possa receber number ou a string "N.A" (Não
Avaliado).
2. Insira os valores: 8.5, 10, "N.A", 7.2.
3. Crie uma lógica que percorra o array e:
● Se for um número, imprima: "Nota: [valor]".
● Se for "N.A", imprima:"O aluno não realizou a prova".`,

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
● Ao final, exiba a quantidade total de números que foram impressos.`,

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






