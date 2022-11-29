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

const precoEtiqueta = 300;
const tipoDePagamento = 3;

if(tipoDePagamento === 1){
    const descontoDebito = precoEtiqueta - (precoEtiqueta * 0.10)
    console.log(`Se pagamento for no Débito: ${descontoDebito}`)
} else if(tipoDePagamento === 2){
    const descontoDinheiro = precoEtiqueta - (precoEtiqueta * 0.15)
    console.log(`Se pagamento for em Dinheiro: ${descontoDinheiro}`)
} else if (tipoDePagamento === 4){
    const juros = precoEtiqueta + (precoEtiqueta * 0.10)
    console.log(`Se pagamento for Parcelado em mais de 2 vezes: ${juros}`)
} else{
    console.log(`Se pagamento for Parcelado em 2 vezes: ${precoEtiqueta}`)
}


