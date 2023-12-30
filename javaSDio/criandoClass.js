class pessoa
{
    nome;
    anoNascimento;
    idade;
    constructor(nomeCons,anoNascimentoCons)
    {
        this.nome=nomeCons;
        this.anoNascimento=anoNascimentoCons;
        this.idade=2023-anoNascimentoCons;
    }
    apresentarSe()
    {
        console.log(`Meu nome é ${this.nome}, minha idade é ${2023-this.anoNascimento}.`);
    }
}
function pessoaMaisVelha(pessoa1,pessoa2)
{
    if(pessoa1.idade>pessoa2.idade)
    {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}.`);
    }
    else if(pessoa2.idade>pessoa1.idade)
    {
        console.log(`${pessoa2.nome} é mais velho que ${pessoa1.nome}.`);
    }
    else
    {
        console.log(`${pessoa2.nome} e ${pessoa1.nome} tem a mesma idade.`);
    }
}
(function()
{
    const luiz= new pessoa('Luiz Eduardo',1987);
    const maria= new pessoa('Maria Eduardo',1987);

   // Luiz.nome='Luiz Eduardo de Jesus';
   // Luiz.anoNascimento=1987;
    luiz.apresentarSe();
    maria.apresentarSe();
    pessoaMaisVelha(maria,luiz);
}())
