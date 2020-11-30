// string
const nome =  'Pablo'
// console.log(nome);


//number
const idade = 29;
console.log(idade);

// boolean
let possuiHobbies = true;
// console.log(possuiHobbies);

// Tipos explícitos

let minhaIdade: number;
minhaIdade = 29;
// console.log(minhaIdade);

// array
let hobbies: any = ['Esportes', 'cozinhar']
console.log(hobbies);
hobbies = [100,200]
// console.log(hobbies);

// Tuplas
let endereco : [string, number, string] = ['Quadra A', 20, ""];
console.log(endereco);
endereco = ['Rua teste', 1000, 'bloco A'];
//console.log(endereco);

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
//console.log(Cor.Amarelo);

//Any

let carro: any = 'BMW';
console.log(carro);
carro = { marca: "BMW", ano: 2020};
//console.log(carro);

// types in functions

function retonaMeuNome(): string{
    return nome;
}
console.log(retonaMeuNome());

function digaOi(): void{
    console.log('oi')
}
digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB
    

}
// console.log(multiplicar(4,3));


// Functions with types

let calculo: (numA: number, numB: number) => number
calculo = multiplicar;
// console.log(calculo(5,6)) 


// Object and types

// objetos

let usuario: { name: string, age: number} = {
    name: 'Pablo',
    age: 29
}
// console.log(usuario);


let funcionario : {
    supervisores: string[],
    baterPonto: (horas: number) => string
} = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
               return 'Ponto Normal' 
        } else{
            return 'Fora do Ponto'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))