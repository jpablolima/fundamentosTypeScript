"use strict";
class Data {
    constructor(dia = 8, mes = 9, ano = 1991) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(5, 9, 2001);
aniversario.dia = 9;
// console.log(Data)
console.log("Dia " + aniversario.dia);
console.log(aniversario);
// Classes & Métodos
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% OFF)  `;
    }
}
const prodt1 = new Produto('carro', 50000);
prodt1.desconto = 0.50;
console.log(prodt1.resumo());
const prodt2 = new Produto('moto', 15000, 0.10);
prodt2.desconto = 0.30;
console.log(prodt2.resumo());
// Modificadores de Acessos
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocdidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocdidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocdidadeAtual = novaVelocidade;
        }
        else {
            this.velocdidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocdidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Fiat', 'Palio', 150);
Array(50).fill(0).forEach(() => carro1.acelerar());
Array(20).fill(0).forEach(() => carro1.frear());
console.log("Aceleração Atual " + carro1.acelerar());
console.log("Desaceleração Atual " + carro1.frear());
//# sourceMappingURL=classes.js.map