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
    private alterarVelocidade(delta: number): number{
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

