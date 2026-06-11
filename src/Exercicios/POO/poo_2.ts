// Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function poo_2 (){

class Quadrado{

   tamanho_do_lado: number

    constructor(tamanho_do_lado:number){
        this.tamanho_do_lado = tamanho_do_lado
    }

    mudar_valor_do_lado (novo_Valor:number){
            this.tamanho_do_lado = novo_Valor
    }

    retornar_valor_do_lado (){
       return this.tamanho_do_lado

    }

    calcular_area (){
        this.tamanho_do_lado * this.tamanho_do_lado
    }
    
}

let quadrado:Quadrado = new Quadrado (10)
}