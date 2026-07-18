// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos necessita de uma ferramenta para calcular a folha salarial dos
// colaboradores. Todo colaborador possui nome e um salário base privado. Um Professor recebe um
// acréscimo de 20% sobre o salário base por dedicação exclusiva. Um Técnico Administrativo recebe
// um valor fixo extra de auxílio-alimentação. O programa deve rodar em um laço solicitando o cadastro
// dos funcionários do mês. Após coletar todos os dados, o software deve rodar a lista utilizando uma
// estrutura de repetição, acionar o método de cálculo salarial específico de cada um e exibir o custo
// total que a instituição terá naquele mês.


export function poo_18() {

    class Funcionario {
        nome: string;
        private _salario_base: number;

        constructor(nome: string, salario_base: number) {
            this.nome = nome;
            this._salario_base = salario_base;
        }

        get salario_base(): number {
            return this._salario_base;
        }

        calcular_salario(): number {
            return this._salario_base;
        }
    }

    class Professor extends Funcionario {
        constructor(nome: string, salario_base: number) {
            super(nome, salario_base);
        }

        calcular_salario(): number {
            return this.salario_base * 1.5
        }
    }

    class TecnicoAdministrativo extends Funcionario {
        auxilio_alimentacao: number;

        constructor(nome: string, salario_base: number, auxilio_alimentacao: number) {
            super(nome, salario_base);
            this.auxilio_alimentacao = auxilio_alimentacao;
        }

        calcular_salario(): number {
            return this.salario_base + this.auxilio_alimentacao;
        }
    }

    let totalFolha = 0;
    let continuar = true;
    let funcionario1: Funcionario 

    while (continuar) {
        let nome = prompt("Digite o nome do funcionário:");
        if (nome === null) break;

        let tipo = prompt("Digite o tipo do funcionário:\n1 - Professor\n2 - Técnico Administrativo");
        if (tipo === null) break;

        if (tipo === "1") {
            let salario_base = Number(prompt("Digite o salário base:"));
            funcionario1 = new Professor(nome, salario_base);
        } else if (tipo === "2") {
            let salario_base = Number(prompt("Digite o salário base:"));
            let auxilio_alimentacao = Number(prompt("Digite o valor do auxílio alimentação:"));
            funcionario1 = new TecnicoAdministrativo(nome, salario_base, auxilio_alimentacao);
        } else {
            alert("Tipo de funcionário inválido!");
            break;
        }

       
        if (funcionario1) {
            alert(`Nome: ${funcionario1.nome}\nFunção: ${tipo === "1" ? "Professor" : "Técnico Administrativo"}\nSalário a receber: R$ ${funcionario1.calcular_salario().toFixed(2)}`);
            totalFolha += funcionario1.calcular_salario();
        }

        let continuarResposta = prompt("Deseja cadastrar outro funcionário? (S/N)");
        if (continuarResposta === null || continuarResposta.toUpperCase() !== "S") {
            continuar = false;
        }
    }

    
    alert(`Total da folha de pagamento: R$ ${totalFolha.toFixed(2)}`);
}