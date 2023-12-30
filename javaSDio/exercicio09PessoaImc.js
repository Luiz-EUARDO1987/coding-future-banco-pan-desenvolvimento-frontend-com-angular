class pessoa
{
    nome;
    peso;
    altura;
    imc;
    constructor(nomeC,pesoC,alturaC)
    {
        this.nome=nomeC;
        this.peso=pesoC;
        this.altura=alturaC;
        this.imc = this.peso / (this.altura*this.altura);
    }
    imcF()
    {
 //Exibindo os resultados no console
        if(this.imc>=40)
        {
            return `Obesidade grau III (mórbida). imc: ${this.imc}`;
        }//fimSe
        else if(this.imc>=35)
        {
            return `Obesidade grau II (severa). imc: ${this.imc}`;
        }//fimSeNao
        else if(this.imc>=30)
        {
            return `Obesidade grau I. imc: ${this.imc}`;
        }//fimSeNao
        else if(this.imc>25)
        {
            return `Levemente acima do peso. imc: ${this.imc}`;
        }//fimSeNao
        else if(this.imc>=18.6)
        {
            return `Peso ideal (parabéns). imc: ${this.imc}`;
        }
        else
        {
            return `Abaixo do peso. icm: ${this.imc}`;
        }  
    }           
}
(function(){
    const luiz =new pessoa('Luiz Eduardo',80,1.8);
    const jose =new pessoa('Jose',75,1.75);
    console.log(luiz.imc,luiz.imcF());
    console.log(jose.imc,jose.imcF());
    console.log(jose);
    console.log(luiz);
}())