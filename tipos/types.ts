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

let minhaIdade: number;
minhaIdade = 29;
// console.log(minhaIdade);

// array
let hobbies: any = ['Esportes', 'cozinhar']
// console.log(hobbies);
hobbies = [100,200]
// console.log(hobbies);

// Tuplas
let endereco : [string, number, string] = ['Quadra A', 20, ""];
// console.log(endereco);
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

// console.log(minhaCor);
//console.log(Cor.Amarelo);

//Any

let carro: any = 'BMW';
// console.log(carro);
carro = { marca: "BMW", ano: 2020};
//console.log(carro);

// types in functions

function retonaMeuNome(): string{
    // return nome;
}
// console.log(retonaMeuNome());

function digaOi(): void{
    // console.log('oi')
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

// Alias
type Funcionario = {
    supervisores: string [],
    baterPonto: (horas: number) => string

    }

let funcionario : Funcionario = {
    supervisores: ['Ana', 'Pedro'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
               return 'Ponto Normal' 
        } else{
            return 'Fora do Ponto'
        }
    }
}
// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(10))


// Union Types
let nota: number | string = 10;
// console.log(`Nota : ${nota}`);

// Never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Carro',
    preco: 60000,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa de um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}
produto.validarProduto();

// // Null
// type Contato = {
//     nome: string,
//     tel1: string,
//     tel2: string | null
// }

// const contato1 : Contato = {
//     nome: "Pablo",
//     tel1: '9999999',
//     tel2: null
// }
// console.log(contato1.nome)
// console.log(contato1.tel1)
// console.log(contato1.tel2)


type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}
 

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}


let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)

