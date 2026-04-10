import { Questao_1 } from "./Exercicios/Condicional/Questao_1.js"
import { Questao_01 } from "./Exercicios/Questao_01.js"
import { Questao_3 } from "./Exercicios/Questao_3.js"
import { Questao_4 } from "./Exercicios/Questao_4.js"
import { Questao_5 } from "./Exercicios/Questao_5.js"
import { Questao_6 } from "./Exercicios/Questao_6.js"
import { Questao_7 } from "./Exercicios/Questao_7.js"
import { Questao_8 } from "./Exercicios/Questao_8.js"

function executarMenu(opcao: number) {
    console.clear()
    console.log(`Opção selecionada: ${opcao}`)

    switch (opcao) {
        case 1: Questao_1(); 
        break
        case 2: Questao_01(); break
        case 3: Questao_3(); break
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


