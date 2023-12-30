/*criar uma class carros. os carros tem uma marca,uma cor e uma gasto médio de combustível por quilometro.
criar um método que dado a distância e o preço do litro retorne o valor gasto no percurso. */

class carro
{
    marca;
    modelo;
    corCarro;
    gastoMedioKm;
    constructor(marcaC,modeloc,corCarroC,gastoMedioKmC)
    {
        this.marca=marcaC;
        this.modelo=modeloc;
        this.corCarro=corCarroC;
        this.gastoMedioKm=gastoMedioKmC;
    }
    valorGastoViagem(distancia,valorLitro,tipoCombustivel)
    {
        if(tipoCombustivel==='etanol')
        {
            return `distância: Km ${distancia}, valor por litro: R$ ${valorLitro}, tipo de combustível: ${tipoCombustivel}, gasto médio do veiculo: Km ${this.gastoMedioKm}, valor gasto na viagem: R$ ${(distancia/this.gastoMedioKm)*valorLitro}`;
        }     
    }

}

(function(){
    const distanciaViagemM= 70;
    const etanol =5;
    const gasolina = 5.63;
    const tipoCombustivel ='etanol';
    const uno = new carro('fiat','uno','verde',12);
    const Palio = new carro('fiat','palio','Preto',10);

    console.log(uno.valorGastoViagem(distanciaViagemM,etanol,tipoCombustivel));
    console.log(Palio.valorGastoViagem(distanciaViagemM,etanol,tipoCombustivel));
}())
