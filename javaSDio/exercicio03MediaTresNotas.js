/*faça um programa que calcule a media das três notas e classifique o estado do estudante */
/*se a media for maior ou igual a 7, este esta aprovado*/
/*se a media entre 5 e 6.9, este esta em exame*/
/*caso contrario, este foi reprovado*/
let i = 3;
let notas =[7,1,7];
let media =0;
for(i=0;i<3;i++)
{
    media+=notas[i];
}
media = media/3;
if(media>6.9 && media<=10)
{
    console.log('Aprovado com media: ',media);
}
else if(media>4.9 && media<7)
{
    console.log('Recuperação com media: ',media);
}
else
{
    console.log('Reprovado com media: ',media);
}