let estaFrio = true;
if(estaFrio){
    let acao = 'coloca casaco'
    // console.log(acao)
}

const cpf: string = '1234567890'
// cpf = '0987654321'
// console.log(cpf)


// Arrow Function

function somar(n1: number, n2: number): number{
    return n1 + n2;
}
// console.log(somar(5, 7));

const subtrair = (n1: number, n2: number) => (n1 - n2)
// console.log(subtrair(2,4));

const multplicar = (n1: number, n2: number) => {
      return n1 * n2
}
// console.log(multplicar(2,4));


const saudacao = () => console.log('olá')
saudacao()

const falarCom = (pessoa: string) => console.log(" olá " + pessoa);
falarCom('Pablo')


// Parâmetros Padrão

function contagemRegressiva(inicio: number = 3): void{
    // console.log(inicio);
    while(inicio > 0){
        inicio--
        // console.log(inicio);
    }
    // console.log('Fim')
}
contagemRegressiva(5)
contagemRegressiva(10)


// Rest & Spread
// Spread
const number = [1,2,3,4,5,6,10]
// console.log(...number)
// console.log(Math.max(...number))

 
const marvel: string[] = ['Spiderman','Viúva Negra','Jean Grey', 'Iron Man','Carol Danvers', 'Hulk', 'Wolwerine']
const dc: string[] = ['Batman', 'Katana','Batgirl ','Wonder Woman', 'Aquaman', 'Flash', 'Arqueiro Verde', ...marvel]
// console.log(dc)


// Rest
function retornarArray(...args: number[]):  number[] {
    return args
}
const numeros = retornarArray(1,2,34,45,78,77)
// console.log(numeros);
// console.log(retornarArray(...number));


// Rest & Spread - Tuplas
const tupla: [number, string, boolean] = [10,'tupla', false]

function tuplaParam1(a: number, b: string, c: boolean): void{
    // console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)


function tuplaParam2(...params: [number, string, boolean]){
    // console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)



// Destructuring (Array)

const caracteristicas = ['Motor', 2020];
const [motor, ano] = caracteristicas;

 console.log(motor);
 console.log(ano);

// Destructuring (Objeto)

const item = {
    nome: 'Lamborghini Aventador ',
    ano: 2020,
    preco: 2000000,
    caracteristicas:{
        importado: 'Importado'
    }
}
const nomeItem = item.nome
const Ano = item.ano
const precoItem = item.preco

// console.log(nomeItem);
// console.log(Ano);
// console.log(precoItem);


const { nome: n, ano: a, preco: p, caracteristicas: {importado}}  = item
// console.log(n)
// console.log(a)
// console.log(p)


// Template String

const usuarioID: string = 'Batman'
const notificacoes: string = '20'
const bemVindo = `
    Bem Vindo ${usuarioID}, 
    Notificações: ${parseInt(notificacoes) > 20 ? '21': notificacoes}

`

// console.log(bemVindo);


// Callback

function eperar3s(callback: (dado: string) => void){
    setTimeout(() =>{
        callback('3s depois...Callback')
    }, 3000)
}
// eperar3s(function(resultado: string){
//     console.log(resultado)
// })

// // Promise
// function esperar4sPromise(){
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('4s depois... Promise')
//         }, 4000)
//     })
// }
// esperar4sPromise()
//     .then(dado => console.log(dado))


fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme))
    

 
    
    fetch('https://dadosabertos.camara.leg.br/api/v2/blocos/575')
    .then(res => res.json())
    .then(dados => dados.dados)
    // .then(films => fetch(films[0]))
    // .then(resFilm => resFilm.json())
    .then(dados=> console.log(dados))
    