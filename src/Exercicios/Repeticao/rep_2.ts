// Desenvolva a tabuada de um número usando for.


export function rep_2(): void {

    alert("Tabuada do número")
    let num: number = Number(prompt("Digite um número para ver sua tabuada: "))
    let tabuada: string = ""

    for (let i: number = 1; i <= 10; i++) {
        tabuada += `${num} x ${i} = ${num * i}\n`
    }

    alert(tabuada)
}