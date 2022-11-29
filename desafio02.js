/* Um Programa que calcula o valor de uma viagem:
04 variáveis:
Preço do Etanol
Preço da gasolina
Tipo de Combustivel que está no seu carro
Gasto médio de combustivel do carro por KM
Distância em KM da viagem
*/

const precoGasolina = 5.17;
const precoEtanol = 4.32;
const kmPorLitro = 10;
const distanciaEmKm = 125;
const tipoCombustivel = 'Gasolina';

const litrosNecessario = distanciaEmKm / kmPorLitro;
if(tipoCombustivel === 'Etanol'){
    const precoTotal = precoEtanol * litrosNecessario;
console.log(precoTotal.toFixed(2)); 
}else{
    const precoTotal = precoGasolina * litrosNecessario;
console.log(precoTotal.toFixed(2));
}



