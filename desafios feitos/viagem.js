//Maria fará uma viagem cuja duração é de 15 dias para o exterior, onde a moeda local é em dólar, cotado atualmente em R$5.09 reais. Ela possui uma reserva de R$9.500 reais.
//Levando em consideração alguns custos para a viagem. Determine se ela precisará realizar um empréstimo para complementar o valor. 
//Caso o dinheiro convertido em dólar seja suficiente imprima "Valor suficiente para a viagem!". 
//Caso falte um valor menor ou igual a 100,00 dólares imprima ""Você precisará complementar o valor! Faltará apenas U$$ xxx. Peça a um amigo e/ou familiar de sua confiança!" 
// Caso o valor faltante em dólar seja maior que 100,00 dólares imprima "O valor faltante é um valor considerável, pense em realizar um empréstimo! Solicite um empréstimo correspondente à xxxx dólares"

// Observação: o gasto com passagem aérea não está incluso pois ela comprou bem antecipadamente, tanto a passagem de ida e de volta.
//custos:
//diária hotel no exterior: 80,00 dólares
// alimentação : 700 dolares para toda a sua estadia

function viagem (dinheiro) {

    let dias = 15; // 15 dias
    let hotel = 80 * dias; // 80 dolares x 15 dias
    const alimentacao = 700; 
    let realPraDolar = (dinheiro / 5.09).toFixed(2)

    let custo = hotel + alimentacao
    let faltante = (custo - realPraDolar)

    console.log(`Você tem em reais: R$ ${dinheiro}`)
    console.log(`Em dolar: U$ ${realPraDolar}`)
    
    if (realPraDolar >= custo) {
        console.log('Valor suficiente para a viagem!')
    } else if (faltante <= 100) {
        console.log(`Você precisará complementar o valor! Faltará apenas U$${faltante}. Peça a um amigo e/ou familiar de sua confiança!`)
    } else if (faltante > 100) {
        console.log(`O valor faltante é um valor considerável, pense em realizar um empréstimo! Solicite um empréstimo correspondente à ${faltante} dólares.`)
    }
}
viagem(6000)