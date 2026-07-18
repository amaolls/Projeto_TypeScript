// Simulador de Contas Bancárias Cooperativas

// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.




export function poo_26 (){

class ContaCooperativa {
    private _numero: string
    private _titular: string
    private _saldo: number
    private _taxaAdministracao: number

    constructor(numero: string, titular: string, saldo: number = 0, taxa: number = 0.02) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
        this._taxaAdministracao = taxa
    }

    get numero(): string { return this._numero }
    get titular(): string { return this._titular }
    get saldo(): number { return this._saldo }

    depositar(valor: number): void {
        if (valor > 0) this._saldo += valor
    }

    sacar(valor: number): void {
        let taxa = valor * this._taxaAdministracao
        let total = valor + taxa
        if (total <= this._saldo) {
            this._saldo -= total
        } else {
            alert("Saldo insuficiente.")
        }
    }
}

let num = prompt("Número da conta:")
if(num === null) return
let titular = prompt("Titular:")
if(titular === null) return
let conta = new ContaCooperativa(num, titular)

alert("Conta criada: " + conta.numero + " - " + conta.titular)
let valor = Number(prompt("Depósito inicial:"))
conta.depositar(valor)
alert("Saldo: R$ " + conta.saldo.toFixed(2))

let saque = Number(prompt("Valor para saque (com taxa de 2%):"))
conta.sacar(saque);
alert("Saldo após saque: R$ " + conta.saldo.toFixed(2))
}