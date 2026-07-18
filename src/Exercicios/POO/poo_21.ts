// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O

// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.


export function poo_21 (){
class Projeto {
    private _titulo: string
    private _coordenador: string
    private _nota: number

    constructor(titulo: string, coordenador: string, nota: number) {
        this._titulo = titulo
        this._coordenador = coordenador
        this._nota = nota
    }

    get titulo(): string { return this._titulo }
    get coordenador(): string { return this._coordenador }
    get nota(): number { return this._nota }

    set nota(valor: number) {
        if (valor >= 0 && valor <= 10) {
            this._nota = valor
        } else {
            alert("Nota inválida! Deve ser entre 0 e 10.")
        }
    }
}

let titulo = prompt("Título do projeto:")
if(titulo === null) return
let coordenador = prompt("Coordenador:")
if(coordenador === null) return
let nota = Number(prompt("Nota (0 a 10):"))

let projeto = new Projeto(titulo, coordenador, nota);
alert("Projeto cadastrado:\nTítulo: " + projeto.titulo +
      "\nCoordenador: " + projeto.coordenador +
      "\nNota: " + projeto.nota)
}