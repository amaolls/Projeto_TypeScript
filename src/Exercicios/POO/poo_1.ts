// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function poo_1 (){

class Bola {

     cor: string
     circunferencia: number
     material: string

    constructor(cor:string, circunferencia:number, material:string){
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }
    trocarCor(novaCor:string): void{
        this.cor = novaCor
    }
    mostraCor(): string{
        return this.cor
    }
}



    let bola_1:Bola = new Bola("vermelha",65,"couro")

     alert(`A bola tem as características:\nCor: ${bola_1.mostraCor()}\nCircunferência: ${bola_1.circunferencia}cm\nMaterial: ${bola_1.material}`)

}


