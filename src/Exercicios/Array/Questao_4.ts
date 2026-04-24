// Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

export function Questao_4(): any {
    let idade: number = Number(prompt("Informe a Idade:"))

function maior_idade(id:number){
    if (id >= 18 && id <= 100){
        alert("Idade: "+id+". Maior de Idade!")
    } else if(id >= 0 && id < 18){
        alert("Idade: "+id+". Menor de Idade!")
    }else{
        alert("Invalido! Tente novamente!")
    }
        
    
}

maior_idade(idade)
}
