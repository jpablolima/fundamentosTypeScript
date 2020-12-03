"use strict";
// string
// const nome =  'Pablo'
// console.log(nome);
//number
const idade = 29;
// console.log(idade);
// boolean
let possuiHobbies = true;
// console.log(possuiHobbies);
// Tipos explícitos
let minhaIdade;
minhaIdade = 29;
// console.log(minhaIdade);
// array
let hobbies = ['Esportes', 'cozinhar'];
// console.log(hobbies);
hobbies = [100, 200];
// console.log(hobbies);
// Tuplas
let endereco = ['Quadra A', 20, ""];
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
let minhaCor = Cor;
let testCor;
// console.log(minhaCor);
//console.log(Cor.Amarelo);
//Any
let carro = 'BMW';
// console.log(carro);
carro = { marca: "BMW", ano: 2020 };
//console.log(carro);
// types in functions
// function retonaMeuNome(): string{
//     // return nome;
// }
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
let calculo;
calculo = multiplicar;
// console.log(calculo(5,6)) 
// Object and types
// objetos
let usuario = {
    name: 'Pablo',
    age: 29
};
let funcionario = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto(horario) {
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
let nota = 10;
// console.log(`Nota : ${nota}`);
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Carro',
    preco: 60000,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa de um nome');
        }
        if (this.preco <= 0) {
            falha('Valor  inválido');
        }
    }
};
produto.validarProduto();
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map