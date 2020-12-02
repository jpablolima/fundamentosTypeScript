let estaFrio = true;
if(estaFrio){
    let acao = 'coloca casaco'
    console.log(acao)
}

const cpf: string = '1234567890'
// cpf = '0987654321'
console.log(cpf)


// Arrow Function

function somar(n1: number, n2: number): number{
    return n1 + n2;
}
console.log(somar(5, 7));

const subtrair = (n1: number, n2: number) => (n1 - n2)
console.log(subtrair(2,4));

const multplicar = (n1: number, n2: number) => {
      return n1 * n2
}
console.log(multplicar(2,4));


const saudacao = () => console.log('olá')
saudacao()

const falarCom = (pessoa: string) => console.log(" olá " + pessoa);
falarCom('Pablo')


// Parâmetros Padrão

function contagemRegressiva(inicio: number = 3): void{
    console.log(inicio);
    while(inicio > 0){
        inicio--
        console.log(inicio);
    }
    console.log('Fim')
}
contagemRegressiva(5)
contagemRegressiva(10)


// Rest & Spread
// Spread
const number = [1,2,3,4,5,6,10]
console.log(...number)
console.log(Math.max(...number))

 
const marvel: string[] = ['Spiderman','Viúva Negra','Jean Grey', 'Iron Man','Carol Danvers', 'Hulk', 'Wolwerine']
const dc: string[] = ['Batman', 'Katana','Batgirl ','Wonder Woman', 'Aquaman', 'Flash', 'Arqueiro Verde', ...marvel]
console.log(dc)


