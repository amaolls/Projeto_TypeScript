// Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

export function Questao_1(): void {
    

    alert("Derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]")
    let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    
    let pares: number[] = [];
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i])
        }
    }

    
    let impares: number[] = []
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i])
        }
    }

    
    let multiplos2_3_4: number[] = []
    for (let i: number = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0 && numeros[i] % 4 === 0) {
            multiplos2_3_4.push(numeros[i])
        }
    }

   
    let reversa: number[] = []
    for (let i: number = numeros.length - 1; i >= 0; i--) {
        reversa.push(numeros[i])
    }

    
    alert(
        "Listas derivadas de [0..15]:\n\n" +
        "a) Pares: " + pares.join(", ") + "\n" +
        "b) Ímpares: " + impares.join(", ") + "\n" +
        "c) Múltiplos de 2, 3 e 4: " + multiplos2_3_4.join(", ") + "\n" +
        "d) Lista reversa: " + reversa.join(", ")
    )
}
