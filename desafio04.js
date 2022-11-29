/* 
IMC = peso / (altura * altura)
Elabore um programa que classifique um adulto entre:
Abaixo de 17        Muito abaixo do peso
Entre 17 e 18,49    Abaixo do peso
Entre 18,5 e 24,99  Peso normal
Entre 25 e 29,99    Acima do peso
Entre 30 e 34,99    Obesidade I
Entre 35 e 39,99    Obesidade II
 */

const peso = 68;
const altura = 1.60;
const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2))
if (imc < 17){
    console.log("Muito abaixo do peso");
} else if (imc >= 17 && imc < 18.49){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.99){
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.99){
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 34.99){
    console.log("Obesidade Grave I");
} else{
    console.log("Obesidade Grave II"); 
}
  


