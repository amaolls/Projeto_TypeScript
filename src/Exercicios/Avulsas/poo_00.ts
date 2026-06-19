class funcionario{
    public nome: string
    public sobrenome: string
    private _idade: number
    private _salarioBase: number

    constructor (nome:string, sobrenome:string, idade: number, salarioBase: number){
        this.nome = nome
        this.sobrenome = sobrenome
        this._idade = idade
        this._salarioBase = salarioBase
    }

    get idade (){

    }
    set idade (){

    }
    get salarioBase(){

    }
    set salarioBase(){

    }
}

class Gerente extends funcionario{
    private _bonus: number = 500

    get bonus (): number {
        return this._bonus
    }

    calcularNovoSalario():number{
        let novoSalario = this.salarioBase + this._bonus
        return novoSalario
    }
}