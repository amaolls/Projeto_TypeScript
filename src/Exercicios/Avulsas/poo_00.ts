//encapsulamento

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

    get idade ():number{
        return this._idade

    }
    set idade (idade:number){
        this._idade= idade
    }
    get salarioBase(){
        return this._salarioBase
    }
    set salarioBase(salario:number){
            this._salarioBase = salario
    }
}

class Gerente extends funcionario{
    private _bonus: number = 500
    
    get bonus (): number {
        return this._bonus
    }
    constructor(nome:string, sobrenome:string, idade: number, salarioBase: number, nivel: string)
    this.nome = nome
    this.sobrenome = sobrenome
    this._idade = idade
    
    calcularNovoSalario():number{
        let novoSalario = this.salarioBase + this._bonus
        return novoSalario
 
   }
   public exibirFuncionario ():void{

   }

class desenvolvedor extends funcionario{
    private _bonus: number = 1500

    get bonus (): number {
        return this._bonus
    }

    calcularNovoSalario():number{
        let novoSalario = this.salarioBase + this._bonus
        return novoSalario
 
   }

   public exibirFuncionario ():void{

   }


}

let Funcionario = new funcionario()
