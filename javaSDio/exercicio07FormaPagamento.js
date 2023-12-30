/*12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento
 pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o 
 cálculo adequado.Tabela de Código de Condições de Pagamento
 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto
 2 - À Vista no cartão de crédito, recebe 10% de desconto
 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros
 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%*/
function porcentagemRetorna(valor,porcentagem)
{
    let valorRetornado = (valor*porcentagem)/100;
    return valorRetornado;
}

function formaPagamento(escolha,preco,parcelas)
{
    if(escolha===1)
 {
   return 'valor total no pix ou avista: R$ ',preco-porcentagemRetorna(preco,15);
 }
 else if(escolha===2)
 {
   return 'valor total avista no catão de credito: R$ ',preco-porcentagemRetorna(preco,10);
 }
 else if(escolha===3)
 {
   return 'valor total en duas vezes no cartão de credito: 2 X R$ ',(preco/2);
 }
 else
{
   return 'parcelado no cartão: ',parcelas,' vezes, valor das parcelas: R$ ',(preco+porcentagemRetorna(preco,10))/parcelas;
}
}

(function()
{
   const escolha=3;
   const produtoPreco=100;
   const parcelas=3;
   console.log(formaPagamento(escolha,produtoPreco,parcelas));
}())


