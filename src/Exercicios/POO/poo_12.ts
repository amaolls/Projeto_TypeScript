// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação.

export function poo_12() {
  class Aluguel {
    public modelo: string
    private _valorDiaria: number = 200
    public qtDias: number

    constructor(modelo: string, qtDias: number) {
      this.modelo = modelo
      this.qtDias = qtDias
    }

    get vDiaria(): number {
      return this._valorDiaria
    }

    TotalAluguel(): void {
      const total = this._valorDiaria * this.qtDias
      
      const resumo = `Resumo da Locação\n` +
                     `Carro: ${this.modelo}\n` +
                     `Diária: R$ ${this._valorDiaria.toFixed(2)}\n` +
                     `Dias: ${this.qtDias}\n` +
                     `Total: R$ ${total.toFixed(2)}`
      
      alert(resumo)
    }
  }

  let opcao: number = 0
  let locacao: Aluguel | null = null

  while (opcao !== 3) {
    const entrada = prompt("Menu de Locação:\n1 - Fazer reserva\n2 - Visualizar valores\n3 - Sair")
    opcao = entrada ? parseInt(entrada) : 3

    if (opcao === 1) {
      const modelo = prompt("Digite o modelo do carro:") || "Não informado"
      const qtDias = parseInt(prompt("Digite a quantidade de dias:") || "0")

      locacao = new Aluguel(modelo, qtDias)
      locacao.TotalAluguel()
    } else if (opcao === 2) {
      if (locacao) {
        locacao.TotalAluguel()
      } else {
        alert("Nenhuma locação ativa encontrada.")
      }
    }
  }
}


