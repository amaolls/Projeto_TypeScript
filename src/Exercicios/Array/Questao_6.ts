// Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

export function Questao_6(): any {
    let nota: number = 0
let media: number
let soma: number = 0
function calcule_Media(n:number){

    for (let i: number = 1; i <= 3; i++){
        nota = Number(prompt("Informe a Nota: "))
        soma += nota   
    }
    media = soma/3
        if(media >= 7){
            alert("Média do Aluno: "+media.toFixed(2)+". Aprovado!")
        } else{
            alert("Média do Aluno: "+media.toFixed(2)+". Reprovado!")
        }
}

calcule_Media(nota)
}
