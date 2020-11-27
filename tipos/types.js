"use strict";
// string
var nome = 'Pablo';
console.log(nome);
//number
var idade = 29;
console.log(idade);
// boolean
var possuiHobbies = true;
console.log(possuiHobbies);
// Tipos explícitos
var minhaIdade;
minhaIdade = 29;
console.log(minhaIdade);
// array
var hobbies = ['Esportes', 'cozinhar'];
console.log(hobbies);
hobbies = [100, 200];
console.log(hobbies);
// Tuplas
var endereco = ['Quadra A', 20, ""];
console.log(endereco);
endereco = ['Rua teste', 1000, 'bloco A'];
console.log(endereco);
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
console.log(minhaCor);
console.log(Cor.Amarelo);
