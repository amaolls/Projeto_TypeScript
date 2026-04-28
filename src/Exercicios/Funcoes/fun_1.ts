// Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).


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
    alert(`A soma dos elementos contidos no número ${num_info} é ${resultado}`)
}