// Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function fun_7(): void {
    
    alert("Teste a autonomia do seu carro")
    
    let Distancia_P: number = Number(prompt("Digite a distância percorrida (km): "))
    let Quantidade_C: number = Number(prompt("Digite a quantidade de combustível gasto (litros): "))
    let Capacidade_Tanque: number = Number(prompt("Digite a capacidade total do tanque (litros): "))
    
    
    function Consumo_Medio(distancia: number, combustivel: number): number {
        let consumo: number = distancia / combustivel
        return consumo
    }
    
    
    function Tanque_Cheio(consumoMedio: number, capacidadeTanque: number): number {
        let autonomia: number = consumoMedio * capacidadeTanque
        return autonomia
    }
    
    
    let kmPorLitro: number = Consumo_Medio(Distancia_P, Quantidade_C)
    let autonomiaTotal: number = Tanque_Cheio(kmPorLitro, Capacidade_Tanque)
    
    
    alert(
        " AUTONOMIA DO VEÍCULO \n\n" +
        "Distância percorrida: " + Distancia_P + " km\n" +
        "Combustível gasto: " + Quantidade_C + " litros\n" +
        "Consumo médio: " + kmPorLitro.toFixed(2) + " km/l\n\n" +
        "Capacidade do tanque: " + Capacidade_Tanque + " litros\n" +
        "Autonomia com tanque cheio: " + autonomiaTotal.toFixed(2) + " km"
    )
}