// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação.

export function poo_12() {
  class Aluguel {
    public modelo: string
    private _valorDiaria: number = 200
    public qtDias: number

    constructor(modelo: string, valorDiaria: number, qtDias: number) {
      this.modelo = modelo
      this._valorDiaria = valorDiaria
      this.qtDias = qtDias
    }

    get vDiaria(): number {
      return this._valorDiaria
    }

    set vDiaria(valor: number) {
      this._valorDiaria = valor
    }
    totalAluguel(): void {
      const total = this._valorDiaria * this.qtDias
      console.log(`\n=== Resumo da Locação ===`)
      console.log(`Carro: ${this.modelo}`)
      console.log(`Diária: R$ ${this._valorDiaria.toFixed(2)}`)
      console.log(`Dias: ${this.qtDias}`)
      console.log(`Total: R$ ${total.toFixed(2)}`)
    }
  }

  let opcao: number = 0
  let locacao: Aluguel | null = null

  while (opcao !== 3) {
    const entrada = prompt("Menu de Locação:\n1 - Fazer reserva\n2 - Visualizar valores\n3 - Sair")
    opcao = entrada ? parseInt(entrada) : 3

    if (opcao === 1) {
      const modelo = prompt("Digite o modelo do carro:") || "Não informado"
      const valorDiaria = parseFloat(prompt("Digite o valor da diária:") || "0")
      const qtDias = parseInt(prompt("Digite a quantidade de dias:") || "0")

      locacao = new Aluguel(modelo, valorDiaria, qtDias)
      locacao.totalAluguel()
    } 
    else if (opcao === 2) {
      if (locacao) {
        locacao.totalAluguel()
      } else {
        console.log("Nenhuma locação ativa encontrada.")
      }
    }
  }
}

