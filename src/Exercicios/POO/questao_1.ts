// Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor



class Bola {

    private cor: string
    private circunferencia: number
    private material: string

    constructor(cor:string, circunferencia:number, material:string){
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    public trocarCor(novaCor:string){
    this.cor = novaCor
}
   public mostraCor(){
    return this.cor
}
}

