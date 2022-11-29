/* Um Programa que calcula o valor de uma viagem:
03 variáveis:
1- Preço da gasolina
2- Gasto médio de combustivel do carro por KM
3- Distância em KM da viagem
*/

const precoGasolina = 5.17;
const kmPorLitro = 10;
const distanciaEmKm = 125;

const litrosNecessario = distanciaEmKm / kmPorLitro;
const precoTotal = precoGasolina * litrosNecessario;
console.log(precoTotal.toFixed(2));