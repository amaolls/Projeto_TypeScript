// Crie uma função que receba um número e retorne se ele é par ou ímpar.
export function Questao_01(): any {

    
    function impar_Par(valor:number):any{
        if(valor % 2 === 0){
            alert("Número "+valor+" é Par.")
        } else{
            alert("Número "+valor+" é Ímpar.") 
        }
    }

    let numero: number = Number(prompt("Informe um numero: "))
    impar_Par(numero)
}
