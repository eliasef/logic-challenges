/* 1- Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Entrada

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

Saída

Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro). */

function promocao (precos) { // precos é um array // [10,5,12,8,10]

    let soma = 0; // 
    let menorValor = precos[0]

    for (var i = 0; i < precos.length; i++) { // varredura em precos
        soma += precos[i]; // total da compra

        if (precos[i] < menorValor) { // busca em cada elemento o menor valor
            menorValor = precos[i]
        }

    } 
    if (precos.length < 5) {
        menorValor = 0
    }

console.log("O total da sua compra foi: " + soma + '\n' + 'Com um desconto de: ' + menorValor + '\n' + 'Totalizando: ' + (soma - menorValor))
}
promocao([10,0.5,20,11,12])