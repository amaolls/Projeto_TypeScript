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
    //q1 (CONDICIONAL)
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
    //q2   
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
    //q3
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
    //q4
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
    //q1 (função)
    'btn-q5': `1 - Crie um programa que peça números até o usuário digitar 0 e mostre:
● Quantidade de números digitados
● Soma total`,

    'btn-q6': ``,
    'btn-q7': ``,
    'btn-q8': ``,
    'btn-q9': ``,
    'btn-q10': ``,
    'btn-q11': ``,
    'btn-q12': ``,
    'btn-q13': ``,
    'btn-q14': ``,
    'btn-q15': ``,
    'btn-q16': ``,
    'btn-q17': ``,
    'btn-q18': ``,
    'btn-q19': ``,
    'btn-q20': ``,
    'btn-q21': ``,
    'btn-q22': ``,
    'btn-q23': ``,
    'btn-q24': ``,
    'btn-q25': ``,
    'btn-q26': ``,
    'btn-q27': ``,
    'btn-q28': ``,
};

//LGICA DO TERMINAL COPIA CODIGO
const terminalPre = document.getElementById('terminalCode') as HTMLPreElement;
const btnCopiar = document.getElementById('btnCopiarCodigo') as HTMLButtonElement;

//exibir o código no terminal
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






