/* Você está trabalhando num aplicativo de mobilidade e ficou com a tarefa de fazer a funcionalidade que calcula o valor a pagar do usuário. Olha só que responsa, hein?

A lógica é a seguinte:

Caso a viagem seja muito curta, ou seja, dure menos de 05 minutos, a corrida custará 6 reais, independentemente da distância percorrida.

Caso a viagem seja média, ou seja, dure entre 05 minutos e uma hora, a viagem custará 1 real por minuto mais 50 centavos por quilômetro percorrido.

Para viagens mais longas, que durem mais de uma hora, o preço da viagem deixa de depender do tempo e passa a depender apenas da distância percorrida.

Neste caso, a viagem custará:

2 reais por quilômetro, caso a distância seja menor que 100km
1,50 reais por quilômetro, caso a distância seja 100km ou mais

A entrada será composta por dois parâmetros:

tempo sempre dado em minutos
distancia sempre dada em quilômetros. */

function mobilapp (tempo, distancia) {

    console.log(`Distância percorrida: ${distancia}/km.`)
    console.log(`O tempo da sua viagem foi de: ${tempo} minutos.`)

    let preco; // qntd em reais para pagar (em reais)

    if (tempo < 5) { // VIAGEM MUITO CURTA
        preco = 6;
    } else if (tempo >= 5 && tempo <= 60) { // VIAGEM MÉDIA
        preco = (1 * tempo) + 0.5 * distancia
    } else if (tempo > 60) { // VIAGEM LONGA
        if (distancia < 100) {
            preco = 2 * distancia;
        } else if (distancia > 100) {
            preco = 1.5 * distancia
        }
    }
console.log(`Preço da viagem: R$ ${preco}`)
}
mobilapp(40,54)
