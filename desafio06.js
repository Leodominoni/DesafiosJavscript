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

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
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

(function (){
    const peso = 68;
    const altura = 1.60;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

