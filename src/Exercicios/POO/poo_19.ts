// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.


export function poo_19 (){
class Sensor {
    codigo: string
    leitura: number

    constructor(codigo: string, leitura: number) {
        this.codigo = codigo
        this.leitura = leitura
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Leitura: " + this.leitura
    }

    alerta(): boolean {
        return false
    }
}

class SensorTemperatura extends Sensor {
    constructor(codigo: string, leitura: number) {
        super(codigo, leitura)
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Temperatura: " + this.leitura + " °C"
    }

    alerta(): boolean {
        return this.leitura > 40
    }
}

class SensorPressao extends Sensor {
    constructor(codigo: string, leitura: number) {
        super(codigo, leitura)
    }

    exibir(): string {
        return "Código: " + this.codigo + " - Pressão: " + this.leitura + " atm"
    }

    alerta(): boolean {
        return this.leitura > 5
    }
}

let cod = prompt("Código do sensor:")
if(cod === null) return
let tipoSensor = prompt("1 - Temperatura\n2 - Pressão")
let leitura = Number(prompt("Leitura:"))

let sensor: Sensor
if (tipoSensor === "1") {
    sensor = new SensorTemperatura(cod, leitura)
} else {
    sensor = new SensorPressao(cod, leitura)
}

alert("Dados do sensor:\n" + sensor.exibir() + "\nAlerta: " + (sensor.alerta() ? "SIM" : "NÃO"))

}
