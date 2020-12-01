"use strict";
// string
// const nome =  'Pablo'
// console.log(nome);
//number
var idade = 29;
// console.log(idade);
// boolean
var possuiHobbies = true;
// console.log(possuiHobbies);
// Tipos explícitos
var minhaIdade;
minhaIdade = 29;
// console.log(minhaIdade);
// array
var hobbies = ['Esportes', 'cozinhar'];
// console.log(hobbies);
hobbies = [100, 200];
// console.log(hobbies);
// Tuplas
var endereco = ['Quadra A', 20, ""];
// console.log(endereco);
endereco = ['Rua teste', 1000, 'bloco A'];
//console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Verde"] = 3] = "Verde";
})(Cor || (Cor = {}));
var minhaCor = Cor;
var testCor;
// console.log(minhaCor);
//console.log(Cor.Amarelo);
//Any
var carro = 'BMW';
// console.log(carro);
carro = { marca: "BMW", ano: 2020 };
//console.log(carro);
// types in functions
function retonaMeuNome() {
    // return nome;
}
// console.log(retonaMeuNome());
function digaOi() {
    // console.log('oi')
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(4,3));
// Functions with types
var calculo;
calculo = multiplicar;
// console.log(calculo(5,6)) 
// Object and types
// objetos
var usuario = {
    name: 'Pablo',
    age: 29
};
var funcionario = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do Ponto';
        }
    }
};
// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(10))
// Union Types
var nota = 10;
// console.log(`Nota : ${nota}`);
// Never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Carro',
    preco: 60000,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
