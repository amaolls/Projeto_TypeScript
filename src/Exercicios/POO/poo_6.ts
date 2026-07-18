// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function poo_6 (){
    class ContaCorrente {
    private _numero: string
    private _nome: string
    private _saldo: number

    constructor(numero: string, nome: string, saldo: number = 0) {
        this._numero = numero
        this._nome = nome
        this._saldo = saldo
    }

    get saldo(): number { return this._saldo }
    get nome(): string { return this._nome }
    get numero(): string { return this._numero}

    set nome(n: string) {
        if (n.length > 0) this._nome = n
    }

    depositar(valor: number): void {
        if (valor > 0) this._saldo += valor
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor
        } else {
            alert("Saldo insuficiente ou valor inválido.")
        }
    }
}

let numConta = prompt("Número da conta:")
if(numConta === null) return
let nomeTitular = prompt("Nome do titular:")
if(nomeTitular === null) return
let conta = new ContaCorrente(numConta, nomeTitular)

alert("Conta criada com sucesso!\nNúmero: " + conta.numero + "\nTitular: " + conta.nome)

let opcao = prompt("Escolha:\n1 - Depositar\n2 - Sacar\n3 - Ver Saldo\n4 - Sair")
if (opcao === "1") {
    let valor = Number(prompt("Valor para depósito:"))
    conta.depositar(valor)
    alert("Novo saldo: R$ " + conta.saldo.toFixed(2))
} else if (opcao === "2") {
    let valor = Number(prompt("Valor para saque:"))
    conta.sacar(valor);
    alert("Novo saldo: R$ " + conta.saldo.toFixed(2))
} else if (opcao === "3") {
    alert("Saldo atual: R$ " + conta.saldo.toFixed(2))
} else {
    alert("Saindo...")
}
}