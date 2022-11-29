class Pessoa{
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
 }
function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`A pessoa ${p1.nome} é mais velha.`)
    } else if(p1.idade < p2.idade){
        console.log(`A pessoa ${p2.nome} é mais velha`)
    }else{
        console.log('Ambos tem a mesma idade')
    }
} 
const carlos = new Pessoa('Carlos', 30)
const paulo = new Pessoa('Paulo', 29)

compararPessoas(carlos, paulo)