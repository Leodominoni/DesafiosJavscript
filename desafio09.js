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

 /*   Instâncias   */ 
 const paulo = new Pessoa('Paulo', 25);
 const carlos = new Pessoa('Carlos', 26);

console.log(paulo);
