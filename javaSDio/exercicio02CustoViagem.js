/*faça um programa para calcular os custos com combustível de uma viagem
preço da gasolina
preço do etanol
quilometragem por litro
distância da viagem
o etanol tem que ser 0,75 mais barato que a gasolina para ser vantajoso
imprimir na tela o valor gasto para a viajem
*/
const gasolina = 5.63;
const etanol = 4.91;
let distancia = 100;
let quilometragemPorLitro=10;

if((gasolina*0.75)>etanol)
{
    console.log('preço etanol ',etanol);
    console.log('distância ',distancia);
    console.log('custo do quilometro ',etanol/quilometragemPorLitro);
    console.log('total gasto para ir: ',(distancia/quilometragemPorLitro)*etanol);
}
else
{
    console.log('preço gasolina ',gasolina);
    console.log('distância ',distancia);
    console.log('custo do quilometro ',gasolina/quilometragemPorLitro);
    console.log('total gasto para ir: ',(distancia/quilometragemPorLitro)*gasolina);
    
    
}