/* Programa com 3 notas calcule e mostre a média e sua classificação conforme a tabela abaixo:
Media = (n1 + n2 + n3) / 3

Classificação:
Média menor que 5: reprovado
Média entre 5 e 7: recuperação
Média acima de 7: aprovado
*/

let n1 = 10;
let n2 = 8.5;
let n3 = 6;
let media = (n1 + n2 + n3)/3
if(media < 5){
    console.log("Reprovado")
}else if(media >= 5 && media <= 7){
    console.log("Recuperação")
}else{
    console.log("Aprovado")
}