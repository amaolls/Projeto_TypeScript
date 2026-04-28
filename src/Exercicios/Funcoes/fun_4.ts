// Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

export function fun_4(): void {
    
    alert("Caixa Eletrônico - Notas de 50, 20 e 10")
    
    let valor: number = Number(prompt("Digite o valor do saque: "))
    
    function calcularNotas(saque: number): void {
        let notas50: number = 0
        let notas20: number = 0
        let notas10: number = 0
        let restante: number = saque
        
        while (restante >= 50) {
            notas50++;
            restante -= 50
        }
        
        while (restante >= 20) {
            notas20++;
            restante -= 20
        }
        
        while (restante >= 10) {
            notas10++;
            restante -= 10
        }
        
        alert(
            "Valor do saque: " + saque +
            "\nNotas de 50: " + notas50 +
            "\nNotas de 20: " + notas20 +
            "\nNotas de 10: " + notas10
        );
    }
    
    calcularNotas(valor)
}