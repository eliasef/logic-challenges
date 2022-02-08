/* Faça um programa que, dado um número a partir do qual deve-se começar a contagem regressiva, imprima na tela a contagem regressiva desse número até 0. Ao final da contagem, imprima a mensagem KABUM.

Importante: cada número deve ser impresso em uma nova linha, assim como a mensagem KABUM ao final.

Entrada

A entrada será sempre um número positivo a partir do qual deve-se começar a contagem regressiva.

Saída

Imprima na tela a contagem regressiva, colocando cada número da contagem em uma linha, incluindo o valor inicial fornecido na entrada e o zero. Na última linha, deve estar sempre a palavra KABUM */


function contagemBomba (numero) {

var aparece = "KABUM"

    for (var i = numero; i >= 0; i--) {
        console.log(i)
        }
       console.log(aparece)     

}
contagemBomba(10)
