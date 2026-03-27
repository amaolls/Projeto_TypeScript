// Crie uma função que receba a idade de uma pessoa e informe se ela é maior de idade.

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