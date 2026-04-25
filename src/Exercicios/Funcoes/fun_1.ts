// Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).


export function fun_1(){
   
   let num_info:number = Number(prompt("Esse programa calcula a soma de todos os números de 1 até o número fornecido. \n Informe um número: "))
    function somarAte(n:number):number{
        let soma:number = 0

        for (let i: number = 1; i <= n; i++){
            soma += i
        }
        return soma
    }
somarAte(num_info)
alert("A soma dos elemento dos elementos contidos no número "+num_info+" é"+somarAte)
}