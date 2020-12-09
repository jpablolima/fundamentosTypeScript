interface Humano {
    nome: string
    idade?: number
    [props: string]: any   
    saudar(sobrenome: string): void
}


function saudarComOla(pessoa: Humano){

    console.log('olá, ' + pessoa.nome)

}


const pessoa : Humano ={
    nome: 'Pablo',
    idade: 29,
    saudar(sobrenome: string){
        console.log('Meu nome:' + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
pessoa.saudar('Lima')
// saudarComOla({ nome: 'Ana', idade:27, altura: 1.75})

// Classes

class Cliente implements Humano {
    nome: string = ''
    saudar(sobrenome: string){
        console.log('meu nome: ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome  = "Han"
saudarComOla(meuCliente)
meuCliente.saudar('Solo')

// Função

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number ): number{
    return Array(exp).fill(base).reduce((t,a) => t * a)
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)