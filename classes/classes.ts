class Data {
    // Classes 
    dia: number
    mes: number
    ano: number


    constructor(dia: number = 8,  mes: number = 9, ano: number = 1991){
        this.dia = dia
        this.mes = mes
        this.ano = ano

    }
}

const aniversario = new Data(5,9,2001)
aniversario.dia = 9
// console.log(Data)
console.log("Dia " + aniversario.dia)
console.log(aniversario)


// Classes & Métodos
class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0 ){
        
    }
    precoComDesconto(): number{
        return this.preco *(1 - this.desconto)
    }
    
          public resumo(): string{
              return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100 }% OFF)  `
          } 
}
const prodt1 = new Produto('carro', 50000);
prodt1.desconto = 0.50;
console.log(prodt1.resumo())
const prodt2 = new Produto('moto', 15000, 0.10);
prodt2.desconto = 0.30;
console.log(prodt2.resumo());


// Modificadores de Acessos


class Carro {
    private velocdidadeAtual: number = 0
    
    constructor(public marca: string, public modelo: string, 
        private velocidadeMaxima: number = 200){

    } 
    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocdidadeAtual  + delta
        const velocidadeValida = novaVelocidade >= 0
        && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida) {
            this.velocdidadeAtual  = novaVelocidade
        } else{

            this.velocdidadeAtual = delta > 0 ? this.velocidadeMaxima : 0

        }
        return this.velocdidadeAtual
    }
    public acelerar(): number{
        return this.alterarVelocidade(5)
    }
    public frear(): number{
        return this.alterarVelocidade(-5)
    }
        
}

const carro1 = new Carro('Fiat', 'Palio', 150)
Array(50).fill(0).forEach(() => carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear())
console.log("Aceleração Atual " + carro1.acelerar())
console.log("Desaceleração Atual " + carro1.frear())



// Herança

class Ferrari extends Carro{
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }
    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40  = new Ferrari('f40', 325)
console.log(`${f40.marca} ${f40.modelo}`)
Array(50).fill(0).forEach(() => f40.acelerar());
Array(10).fill(0).forEach(() => f40.frear())
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters

class Pessoa{
    private _idade: number = 0
    
    get idade(): number{
        return this._idade
    }
    set idade(valor: number) {
        if(valor >= 0 && valor <=110) {
            this._idade = valor
        }
    }
}
const pessoa1 = new Pessoa
pessoa1.idade = 20
console.log(`Idade: ${pessoa1.idade}`)


// Atributos e métodos estáticos
class Matematica{
    static PI: number = 3.14
    
    static areaCirc(raio: number):  number{
        return this.PI * raio * raio
    } 
}

console.log(Matematica.areaCirc(5))

// Classe Abstrata

abstract class Calculo {
    protected resultado: number = 0
        
    abstract executar(...numeros: number[]): void
    
    getResultado(): number{
        return this.resultado
    }
}

class Soma extends Calculo{
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t,a) => t+a)
    }
}

class Multiplicacao extends Calculo{
    executar(...numeros: number[]): void{
        this.resultado = numeros.reduce((t,a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5,6)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2,3,4,5,6)
console.log(c1.getResultado())


// Construtor Privado & Singleton

