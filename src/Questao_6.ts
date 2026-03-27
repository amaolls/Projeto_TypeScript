
// Crie um programa que receba 5 números e mostre quantos são positivos.
 let num : number=0
 let contador: number = 0 

for (let i: number = 1; i <= 5; i++){
    let num : number = Number(prompt("Digite 5 valores: "))
    
    if (num > 0){
        contador++
    }
    console.log("Números Positivos: "+contador)
    console.log("Números digitados: "+num)
}

