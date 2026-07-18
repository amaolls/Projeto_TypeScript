// Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.



export function poo_27 (){

class Equipamento {
    tombamento: string
    descricao: string

    constructor(tombamento: string, descricao: string) {
        this.tombamento = tombamento
        this.descricao = descricao
    }

    ficha(): string {
        return "Tombamento: " + this.tombamento + "\nDescrição: " + this.descricao
    }
}

class Computador extends Equipamento {
    ram: number

    constructor(tombamento: string, descricao: string, ram: number) {
        super(tombamento, descricao)
        this.ram = ram
    }

    ficha(): string {
        return super.ficha() + "\nRAM: " + this.ram + " GB"
    }
}

class Roteador extends Equipamento {
    portas: number

    constructor(tombamento: string, descricao: string, portas: number) {
        super(tombamento, descricao)
        this.portas = portas
    }

    ficha(): string {
        return super.ficha() + "\nPortas: " + this.portas
    }
}

let tomb = prompt("Número de tombamento:")
if(tomb === null) return
let desc = prompt("Descrição:")
if(desc === null) return
let tipo = prompt("1 - Computador\n2 - Roteador")

let equip: Equipamento
if (tipo === "1") {
    let ram = Number(prompt("Quantidade de RAM (GB):"))
    equip = new Computador(tomb, desc, ram)
} else {
    let portas = Number(prompt("Quantidade de portas:"))
    equip = new Roteador(tomb, desc, portas)
}

alert("Ficha do equipamento:\n" + equip.ficha())
}