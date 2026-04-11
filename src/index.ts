import { Questao_1 } from "./Exercicios/Avulsas/Questao_1.js"
import { Questao_3 } from "./Exercicios/Avulsas/Questao_3.js"
import { Questao_4 } from "./Exercicios/Avulsas/Questao_4.js"
import { Questao_5 } from "./Exercicios/Avulsas/Questao_5.js"
import { Questao_6 } from "./Exercicios/Avulsas/Questao_6.js"
import { Questao_7 } from "./Exercicios/Avulsas/Questao_7.js"
import { Questao_8 } from "./Exercicios/Avulsas/Questao_8.js"
//
import { Questao_01 } from "./Exercicios/Condicional/Questao_01.js"
import { Questao_02 } from "./Exercicios/Condicional/Questao_02.js"
import { Questao_03 } from "./Exercicios/Condicional/Questao_03.js"
import { Questao_04 } from "./Exercicios/Condicional/Questao_04.js"
//
import { Questao_01 } from "./Exercicios/Funcoes/Questao_01.js"
import { Questao_02 } from "./Exercicios/Funcoes/Questao_02.js"
import { Questao_03 } from "./Exercicios/Funcoes/Questao_03.js"
import { Questao_04 } from "./Exercicios/Funcoes/Questao_04.js"
import { Questao_05 } from "./Exercicios/Funcoes/Questao_05.js"
import { Questao_06 } from "./Exercicios/Funcoes/Questao_06.js"
import { Questao_07 } from "./Exercicios/Funcoes/Questao_07.js"
import { Questao_08 } from "./Exercicios/Funcoes/Questao_08.js"
import { Questao_09 } from "./Exercicios/Funcoes/Questao_09.js"
import { Questao_10 } from "./Exercicios/Funcoes/Questao_10.js"
//
import { Questao_01 } from "./Exercicios/Repeticao/Questao_01.js"
import { Questao_02 } from "./Exercicios/Repeticao/Questao_02.js"
import { Questao_03 } from "./Exercicios/Repeticao/Questao_03.js"
import { Questao_04 } from "./Exercicios/Repeticao/Questao_04.js"
import { Questao_05 } from "./Exercicios/Repeticao/Questao_05.js"
import { Questao_06 } from "./Exercicios/Repeticao/Questao_06.js"

function executarMenu(opcao: number) {
    console.clear()
    console.log(`Opção selecionada: ${opcao}`)

    switch (opcao) {
        case 1: 
            Questao_1(); 
            break
        case 2: 
            Questao_01(); 
            break
        case 3: 
             Questao_3();
            break
        case 4: Questao_4(); break
        case 5: Questao_5(); break
        case 6: Questao_6(); break
        case 7: Questao_7(); break
        case 8: Questao_8(); break
        default: console.log("Opção inválida"); break
    }
}

document.getElementById('btn-q1')?.addEventListener('click', () => executarMenu(1))
document.getElementById('btn-q2')?.addEventListener('click', () => executarMenu(2))
document.getElementById('btn-q3')?.addEventListener('click', () => executarMenu(3))
document.getElementById('btn-q4')?.addEventListener('click', () => executarMenu(4))
document.getElementById('btn-q5')?.addEventListener('click', () => executarMenu(5))
document.getElementById('btn-q6')?.addEventListener('click', () => executarMenu(6))
document.getElementById('btn-q7')?.addEventListener('click', () => executarMenu(7))
document.getElementById('btn-q8')?.addEventListener('click', () => executarMenu(8))


