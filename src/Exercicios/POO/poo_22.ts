// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.



export function poo_22 (){
class Veiculo {
    placa: string
    km: number

    constructor(placa: string, km: number) {
        this.placa = placa
        this.km = km
    }

    precisaRevisao(): boolean {
        return false
    }
}

class Onibus extends Veiculo {
    constructor(placa: string, km: number) {
        super(placa, km)
    }

    precisaRevisao(): boolean {
        return this.km >= 10000
    }
}

class Ambulancia extends Veiculo {
    constructor(placa: string, km: number) {
        super(placa, km)
    }

    precisaRevisao(): boolean {
        return this.km >= 5000
    }
}

let placa = prompt("Placa do veículo:")
if(placa === null) return
let km = Number(prompt("Quilometragem atual:"))
let tipo = prompt("1 - Ônibus (10.000 km)\n2 - Ambulância (5.000 km)")

let veiculo: Veiculo
if (tipo === "1") {
    veiculo = new Onibus(placa, km)
} else {
    veiculo = new Ambulancia(placa, km)
}

alert("Placa: " + veiculo.placa +
      "\nKM: " + veiculo.km +
      "\nPrecisa revisão? " + (veiculo.precisaRevisao() ? "SIM" : "NÃO"))
}