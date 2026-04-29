// Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

export function cond_4(): void {

    alert("Ler dois valores e imprime uma das mensagens: \n‘Números iguais’ \n‘Primeiro é maior’ \n‘Segundo maior’")
    let num1: number = Number(prompt("Digite o primeiro número: "))
    let num2: number = Number(prompt("Digite o segundo número: "))

    if (num1 === num2) {
       
        alert("Números digitados: "+num1+", "+num2+"\n Números iguais")
    } else if (num1 > num2) {
        
        alert("Números digitados: "+num1+", "+num2+"\n Primeiro é maior")
    } else {
        
        alert("Números digitados: "+num1+", "+num2+"\n Segundo maior")
    }
}