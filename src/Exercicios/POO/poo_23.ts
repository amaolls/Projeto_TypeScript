// Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.




export function poo_23 (){
class Produto {
    codigo: number
    nome: string
    protected _precoCusto: number

    constructor(codigo: number, nome: string, precoCusto: number) {
        this.codigo = codigo
        this.nome = nome
        this._precoCusto = precoCusto
    }

    get precoCusto(): number { return this._precoCusto}

    calcularPrecoFinal(): number {
        return this._precoCusto
    }
}

class Perecivel extends Produto {
    dataValidade: string

    constructor(codigo: number, nome: string, precoCusto: number, dataValidade: string) {
        super(codigo, nome, precoCusto)
        this.dataValidade = dataValidade
    }

    calcularPrecoFinal(): number {

        return this._precoCusto * 0.70
    }
}

class NaoPerecivel extends Produto {
    constructor(codigo: number, nome: string, precoCusto: number) {
        super(codigo, nome, precoCusto)
    }

    calcularPrecoFinal(): number {
        return this._precoCusto
    }
}

let cod = Number(prompt("Código:"))
let nome = prompt("Nome:")
if(nome === null) return
let preco = Number(prompt("Preço de custo:"))
let tipo = prompt("1 - Perecível\n2 - Não Perecível")

let produto: Produto
if (tipo === "1") {
    let data = prompt("Data de validade:")
    if(data === null) return
    produto = new Perecivel(cod, nome, preco, data)
} else {
    produto = new NaoPerecivel(cod, nome, preco)
}

alert("Produto: " + produto.nome +
      "\nPreço final: R$ " + produto.calcularPrecoFinal().toFixed(2))
}