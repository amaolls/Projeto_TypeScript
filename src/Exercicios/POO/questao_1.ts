// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor



class Bola {

     cor: string
     circunferencia: number
     material: string

    constructor(co:string, ci:number, material:string){
        this.cor = co
        this.circunferencia = ci
        this.material = material
    }
    trocarCor(novaCor:string): void{
        this.cor = novaCor
    }
    mostraCor(): string{
        return this.cor
    }
}

for(let i=0; i<5; i++){

    let co:string, ci: number, material: string
    co = "Vermelha"
    ci = 5
    material = "Couro"

    let bola_1:Bola = new Bola(co,ci,material)

}


