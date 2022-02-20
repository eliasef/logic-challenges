/* Crie um programa para gerenciar as contas de um financiamento de veículo. A pessoa que quer fazer o financiamento precisa informar o valor total do carro, o valor da entrada a ser dada e a quantidade de parcelas que ela deseja pagar. A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento. O preço do carro é de R$ 45.000,00. Desenvolva a solução e exiba conforme o exemplo (o valor da parcela precisa ter 2 casas decimais após a vírgula): 
/ Vamos supor que você dê uma entrada de R$ 10.000, então:
- Valor Financiado: R$35000
- Valor do Juros: R$1750
- Quantidade de Parcelas: 36
- Valor da Parcela: R$1020.83
- Valor Total do Carro: R$46750 */

function financiar (carro, entrada, parcelas) {

const TAXA = 0.05;
let financimento = carro - entrada;
let valorParcela = (financimento + (financimento * 0.05)) / parcelas;


console.log('Valor Financiado: R$ ' + financimento);
console.log('Valor do Juros: R$ ' + (financimento * TAXA));
console.log('Valor total da parcelas: ' + parcelas);
console.log('Valor da Parcela: R$ ' + valorParcela.toFixed(2));
console.log('Valor total do carro: R$ ' +  ((financimento * TAXA) + financimento + entrada))

}
financiar(45000, 10000, 36)
