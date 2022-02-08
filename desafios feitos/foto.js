/* Você está trabalhando numa empresa que desenvolveu um aplicativo que cria filtros para redes sociais. Neste aplicativo, para aplicar o filtro adequadamente, é necessário identificar se a foto foi tirada no modo retrato, paisagem, ou se a foto é quadrada.

Você ficou com a tarefa de desenvolver essa funcionalidade.

Input Format

A entrada será sempre composta de duas variáveis largurae altura que serão números inteiros e positivos.

Output Format

Imprima na tela RETRATO caso a altura seja maior que a largura
Imprima na tela PAISAGEM caso a largura seja maior que a altura
Imprima na tela QUADRADA caso a largura e altura sejam iguais */

function foto(largura, altura) {
    //seu codigo aqui
    if (altura > largura) {
        console.log("RETRADO")
    } else if (largura > altura) {
        console.log("PAISAGEM")
    } else if (largura === altura) {
        console.log("QUADRADA")
    }
  }
  foto(8,8)