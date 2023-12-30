true// verdadeiro
false// falso
let numero =0;
let numeroParTrue= numero%2<1;
let numeroPar=0;
let numeroImpar=0;
console.log(numeroParTrue);
/*
if(numero%2===0)
{
    numeroPar++;
}//fimSe
else
{
    numeroImpar++;
}//fimSeNao
console.log('par: ',numeroPar);
console.log('impar: ',numeroImpar);*/
if(numero===0)
{
    console.log('Não se divide Zero.');
}
else if(numero%2==0)
{
    numeroPar++;
}
else
{
    numeroImpar++;
}
console.log('par: ',numeroPar);
console.log('impar: ',numeroImpar);
