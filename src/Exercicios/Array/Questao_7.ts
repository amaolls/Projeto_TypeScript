// Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.


export function Questao_7(): void {
  
    alert("Lista de Presença")
    let presenca: string[] = []

   
    for (let i: number = 1; i <= 5; i++) {
        let nome: string | null = prompt("Digite o nome do " + i + "º aluno:")
        if (nome !== null) {
            presenca.push(nome)
        } else {
            presenca.push("")
        }
    }

    alert("Lista de presença adicionada com sucesso!")


    let listaMaiuscula: string = "Lista de presença (maiúsculas):\n"
    for (let i: number = 0; i < presenca.length; i++) {
        listaMaiuscula += presenca[i].toUpperCase() + "\n"
    }
    alert(listaMaiuscula)
}