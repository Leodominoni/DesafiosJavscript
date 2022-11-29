/*
Elabore um programa que calcule o preço de um produto de acordo com a etiqueta e escolha a condição de pagamento
Condições de pagamento:

- À vista no Débito, deconto de 10%
- Á vista no dinheiro ou no PIX, desconto de 15%
- Em duas vezes, preço da etiqueta (sem juros)
- Acima de 2x, juros de 10%

código:
1- debito
2- dinheiro ou pix
3- cartão em 2x
4- cartão mais de 2x
*/
function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}
function aplicarJuros(valor, juros){
    return valor + (valor * (juros/100))
}


const precoEtiqueta = 300;
const tipoDePagamento = 5;

if(tipoDePagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if(tipoDePagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (tipoDePagamento === 4){
  console.log(aplicarJuros(precoEtiqueta, 10));
} else{
    console.log(precoEtiqueta);
}




