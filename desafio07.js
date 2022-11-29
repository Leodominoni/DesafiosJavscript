function escreverNome(nome){
    console.log('Meu nome é ' + nome);
    return 'Meu nome é ' + nome;
}
escreverNome('Eduardo');

function verificarIdade(idade){
    if(idade >= 18){
        console.log('Maior de idade');
        return 'Maior de idade';
    } else{
        console.log('Menor de idade');
        return 'Menor de idade';
    }
}
verificarIdade(11);