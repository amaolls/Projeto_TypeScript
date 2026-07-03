// Herança Polimorfismo Encapsulamento
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie e idade. Mamíferos têm tipo de
// alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de &#39;emitir som&#39;
// diferente. O sistema deve cadastrar animais, listar por tipo e simular a &#39;hora da alimentação&#39; chamando o
// método de som de cada um.


export function poo_16 (){
    abstract class Animal {
  nome: string
  especie: string
  idade: number

  constructor(nome: string, especie: string, idade: number) {
    this.nome = nome
    this.especie = especie
    this.idade = idade
  }

  abstract emitirSom(): void
}

class Mamifero extends Animal {
  tipoAlimentacao: string

  constructor(nome: string, especie: string, idade: number, tipoAlimentacao: string) {
    super(nome, especie, idade)
    this.tipoAlimentacao = tipoAlimentacao
  }

  emitirSom(): void {
    console.log(`${this.nome} o(a) ${this.especie} está rugindo/rosnando!`)
  }
}

class Ave extends Animal {
  ehMigratoria: boolean

  constructor(nome: string, especie: string, idade: number, ehMigratoria: boolean) {
    super(nome, especie, idade)
    this.ehMigratoria = ehMigratoria
  }

  emitirSom(): void {
    console.log(`${this.nome} o(a) ${this.especie} está cantando/piando!`)
  }
}

class Zoologico {
  private animais: Animal[] = []

  cadastrarAnimal(animal: Animal): void {
    this.animais.push(animal)
    console.log(`${animal.nome} cadastrado(a) com sucesso!`)
  }

  listarPorTipo(tipo: 'mamifero' | 'ave'): void {
    console.log(`\n--- Listando ${tipo === 'mamifero' ? 'Mamíferos' : 'Aves'} ---`)
    
    const filtrados = this.animais.filter(animal => {
      if (tipo === 'mamifero') return animal instanceof Mamifero
      if (tipo === 'ave') return animal instanceof Ave
      return false
    })
    filtrados.forEach(animal => {
      console.log(`- Nome: ${animal.nome}, Espécie: ${animal.especie}, Idade: ${animal.idade} anos`)
    })
  }

  horaDaAlimentacao(): void {
    console.log('\n--- Hora da Alimentação!---')
    if (this.animais.length === 0) {
      console.log('Nenhum animal cadastrado no zoológico.')
      return
    }
    
    this.animais.forEach(animal => {
      animal.emitirSom()
    })
  }
}

const meuZoo = new Zoologico()
const leao = new Mamifero('Simba', 'Leão', 5, 'Carnívoro')
const arara = new Ave('Blu', 'Arara-Azul', 3, false)
meuZoo.cadastrarAnimal(leao)
meuZoo.cadastrarAnimal(arara)
meuZoo.listarPorTipo('mamifero')
meuZoo.listarPorTipo('ave')
meuZoo.horaDaAlimentacao()
}