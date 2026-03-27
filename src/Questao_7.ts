// Crie uma função que calcule a média de 3 números e informe se o aluno foi aprovado
// (média >= 7).

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