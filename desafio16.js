/* Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado */ 

const numeros = [5, 10, 11, 12, 13, 19, 20, 22, 32, 36];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero%2===0){
        console.log(numero);
    }
}