// Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos: Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function poo_3(){

    class Retangulo {
        base: number
        altura: number

        constructor(base: number, altura: number) {
            this.base = base
            this.altura = altura
        }

        mudar_lados(nova_base: number, nova_altura: number) {
            this.base = nova_base
            this.altura = nova_altura
        }

        retornar_lados() {
            return { base: this.base, altura: this.altura }
        }

        calcular_area() {
            return this.base * this.altura
        }

        calcular_perimetro() {
            return 2 * (this.base + this.altura)
        }
    }

    let retangulo = new Retangulo(10, 5)
    let lados = retangulo.retornar_lados()


    alert(
        `Características do Retângulo:\n` +
        `- Base: ${lados.base}\n` +
        `- Altura: ${lados.altura}\n` +
        `- Área: ${retangulo.calcular_area()}\n` +
        `- Perímetro: ${retangulo.calcular_perimetro()}`
    )
}
