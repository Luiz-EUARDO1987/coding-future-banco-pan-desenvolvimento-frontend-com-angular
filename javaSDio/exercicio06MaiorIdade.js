function retorneNome()
{
    const nome = 'Luiz Eduardo';
    return nome;
}

function maiorIdade(idade)
{
    let idade01= 2023- idade;
    if(idade01>=18)
    {
        console.log('Você é maior de idade. idade: ',idade01);
    }
    else
    {
        console.log('Você é menor de idade. idade: ',idade01);
    }
}

(function(){
let nome;
nome= retorneNome();
console.log('Meu nome é',nome);
maiorIdade(1987);
}() )