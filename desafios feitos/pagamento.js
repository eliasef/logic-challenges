/* Crie um programa para uma loja de ração, onde ao informar o preço do produto sejam exibidas as formas de pagamento disponíveis. Pagamento à vista possui 10% de desconto e parcelado em 4x possui juros de 15%. Exemplo:
- Preço do produto: R$80
- À Vista: R$72
- 4x de: R$23 */

function pagamento (produto) {

    let emDinheiro = produto - (produto * 0.10)
    let cartao = produto + (produto * 0.15)

    console.log(`Preço do produto: ${produto} \nÀ Vista: ${emDinheiro} \n4x de: ${cartao / 4}` )
    
}
pagamento(80)

