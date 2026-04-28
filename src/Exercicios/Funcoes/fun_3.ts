// Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

export function fun_3(): void {
    
    alert("Triângulo de asteriscos no console")
    
    let num: number = Number(prompt("Digite um número: "))
    
    function triangulo(n: number): void {
        for (let i: number = 1; i <= n; i++) {
            let linha: string = "";
            for (let j: number = 1; j <= i; j++) {
                linha += "*"
            }
            console.log(linha)
        }
    }
    
    triangulo(num)
}