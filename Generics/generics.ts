function echo(objeto: any){
    return objeto
}

console.log(echo('Pablo').length)
console.log(echo(29))
console.log(echo({
    nome: 'João',
    idade: 29
}))


// Generics

function echoMelhorado<TIPO>(objeto: TIPO): TIPO{
    return objeto
}


console.log(echoMelhorado('Pablo').length)
console.log(echoMelhorado<number>(29))
console.log(echoMelhorado({ nome: 'Batman', idade: 40 }))

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.4, 8.8, 7.2]
avaliacoes.push(9.1)

const total = avaliacoes.reduce((total, customElements) => total + customElements);
console.log(avaliacoes)
console.log(total)



class Fila<T>{
    private fila: Array<T>

    constructor(...args: T[]){
        this.fila = args
    }

    entrar(elemento: T){
        this.fila.push(elemento)
    }
    proximo(): T {
        const primeiro = this.fila[0]
        this.fila.splice(0,1)
        return primeiro
    }
    imprimir(){
        console.log(this.fila)
    }
}

const fila = new Fila<string>('Pablo', 'Ana', 'Luan', 'Rafaela')
fila.imprimir()
fila.entrar('Batman')
console.log(fila.proximo())



// const mapa = new Mapa<number, string>()
// mapa.colocar({ chave: 1, valor: 'Pedro' })
// mapa.colocar({ chave: 2, valor: 'Rebeca' })
// mapa.colocar({ chave: 3, valor: 'Maria' })
// mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
// console.log(mapa.obter(2))
// mapa.imprimir()
// mapa.limpar()
// mapa.imprimir()