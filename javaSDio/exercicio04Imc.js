/*9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição 
de acordo com a tabela abaixo:
Fórmula do IMC = peso / (altura) ²
Tabela Condições IMC

 Abaixo de 18,5   | Abaixo do peso          
 Entre 18,6 e 24,9 | Peso ideal (parabéns)  
 Entre 25,0 e 29,9 | Levemente acima do peso
 Entre 30,0 e 34,9 | Obesidade grau I 
 Entre 35,0 e 39,9 | Obesidade grau II (severa)
 Maior ou igual a 40 | Obesidade grau III (mórbida) */
 let altura = 1.8;
 let peso = 89;
 //Calculando o IMC
 let imc = peso / (altura*altura);
 //Exibindo os resultados no console
 if(imc>=40)
 {
    console.log('Obesidade grau III (mórbida). imc: ',imc);
 }//fimSe
 else if(imc>=35)
 {
    console.log('Obesidade grau II (severa). imc: ',imc);
 }//fimSeNao
else if(imc>=30)
{
    console.log('Obesidade grau I. imc: ',imc);
}//fimSeNao
else if(imc>25)
{
    console.log('Levemente acima do peso. imc: ',imc);
}//fimSeNao
else if(imc>=18.6)
{
    console.log('Peso ideal (parabéns). imc: ',icm);
}
else
{
    console.log('Abaixo do peso. icm: ',icm);
}