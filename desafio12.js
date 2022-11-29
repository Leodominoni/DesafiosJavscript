/* Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura
Capacidade de dizer o valor do seu IMC (peso/altura * altura)
Instancia uma pessoa José que tenha 70kg de peso e 1,75 de altura e peça para José dizer o valor do seu IMC*/

class Pessoa{
    nome;
    peso;
    altura;  
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura= altura;
    }
    calcularImc(){
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 17){
            return "Muito abaixo do peso";
         } else if (imc >= 17 && imc < 18.49){
             return "Abaixo do peso";
         } else if (imc >= 18.5 && imc < 24.99){
             return "Peso normal";
         } else if (imc >= 25 && imc < 29.99){
             return "Acima do peso";
         } else if (imc >= 30 && imc < 34.99){
             return "Obesidade Grave I";
         } else{
             return "Obesidade Grave II"; 
         }
    }
}
let jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());