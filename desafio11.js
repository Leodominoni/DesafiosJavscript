/* Crie uma classar para representar carros
Carros possuem marca, cor e gasto médio de combustivel por km rodado
Crie um método que dado a quantidade de km e o preco do combustivel nos dê o valor gasto para percorrer o percurso*/

class Carro{
    marca;
    cor; 
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularViagem(distanciaKm, precoCombustivel){
        return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel
    }
}
let fusca = new Carro('Volkswagen', 'Preto', 1/12);


console.log(fusca.calcularViagem(70, 5.17));