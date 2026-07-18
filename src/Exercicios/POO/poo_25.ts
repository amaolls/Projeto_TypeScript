// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte a resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.




export function poo_25 (){

class Assinatura {
    email: string
    valor: number

    constructor(email: string, valor: number) {
        this.email = email
        this.valor = valor
    }

    detalhes(): string {
        return "Email: " + this.email + "\nValor: R$ " + this.valor.toFixed(2)
    }
}

class AssinaturaPadrao extends Assinatura {
    constructor(email: string) {
        super(email, 29.90)
    }

    detalhes(): string {
        return super.detalhes() + "\nTelas: 2"
    }
}

class AssinaturaPremium extends Assinatura {
    constructor(email: string) {
        super(email, 49.90)
    }

    detalhes(): string {
        return super.detalhes() + "\nTelas: 4\nResolução: 4K"
    }
}

let email = prompt("Email:")
if(email === null) return
let tipo = prompt("1 - Padrão (R$29,90)\n2 - Premium (R$49,90)")

let assinatura: Assinatura
if (tipo === "1") {
    assinatura = new AssinaturaPadrao(email)
} else {
    assinatura = new AssinaturaPremium(email)
}

alert("Detalhes da assinatura:\n" + assinatura.detalhes())
}