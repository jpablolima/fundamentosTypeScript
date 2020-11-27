// string
const nome =  'Pablo'
console.log(nome);


//number
const idade = 29;
console.log(idade);

// boolean
let possuiHobbies = true;
console.log(possuiHobbies);

// Tipos explícitos

let minhaIdade: number;
minhaIdade = 29;
console.log(minhaIdade);

// array
let hobbies: any = ['Esportes', 'cozinhar']
console.log(hobbies);
hobbies = [100,200]
console.log(hobbies);

// Tuplas
let endereco : [string, number, string] = ['Quadra A', 20, ""];
console.log(endereco);
endereco = ['Rua teste', 1000, 'bloco A'];
console.log(endereco);

//Enums
enum Cor {
    Cinza,
    Azul, 
    Amarelo, 
    Verde
}

let minhaCor = Cor;
let testCor: Cor.Amarelo;

console.log(minhaCor);
console.log(Cor.Amarelo);

