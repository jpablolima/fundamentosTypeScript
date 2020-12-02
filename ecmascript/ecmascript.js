"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var estaFrio = true;
if (estaFrio) {
    var acao = 'coloca casaco';
    console.log(acao);
}
var cpf = '1234567890';
// cpf = '0987654321'
console.log(cpf);
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(5, 7));
var subtrair = function (n1, n2) { return (n1 - n2); };
console.log(subtrair(2, 4));
var multplicar = function (n1, n2) {
    return n1 * n2;
};
console.log(multplicar(2, 4));
var saudacao = function () { return console.log('olá'); };
saudacao();
var falarCom = function (pessoa) { return console.log(" olá " + pessoa); };
falarCom('Pablo');
// Parâmetros Padrão
function contagemRegressiva(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva(5);
contagemRegressiva(10);
// Rest & Spread
// Spread
var number = [1, 2, 3, 4, 5, 6, 10];
console.log.apply(console, number);
console.log(Math.max.apply(Math, number));
var marvel = ['Spiderman', 'Viúva Negra', 'Jean Grey', 'Iron Man', 'Carol Danvers', 'Hulk', 'Wolwerine'];
var dc = __spreadArrays(['Batman', 'Katana', 'Batgirl ', 'Wonder Woman', 'Aquaman', 'Flash', 'Arqueiro Verde'], marvel);
console.log(dc);
//# sourceMappingURL=ecmascript.js.map