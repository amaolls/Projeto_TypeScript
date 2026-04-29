// Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function fun_5(): void {
    
    alert("Múltiplos de 3 em um intervalo")
    
    let inicio: number = Number(prompt("Digite o número inicial: "))
    let fim: number = Number(prompt("Digite o número final: "))
    
    function multiplosDeTres(inicio: number, fim: number): void {
        console.log("Múltiplos de 3 entre " + inicio + " e " + fim + ":")
        
        for (let i: number = inicio; i <= fim; i++) {
            if (i % 3 === 0) {
                console.log(i)
            }
        }
    }
    
    multiplosDeTres(inicio, fim)
}