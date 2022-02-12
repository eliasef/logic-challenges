// Crie uma função chamada foto que receba na entrada dois parâmetros, largura e altura. E identifique se a foto foi tirada no modo retrato, paisagem ou quadrado. 
/* 
1. Imprima RETRATO caso a altura seja maior que a largura.
2. Imprima PAISAGEM caso a largura seja maior que a altura. 
3. Imprima QUADRADO caso a largura e altura sejam iguais.
4. Para cada condição acima, imprima uma matriz de asteriscos respectiva a cada condição.

Ex: Quando imprimir RETRATO, também imprima um retângulo de asteriscos, e etc. */

function asteriscoVolatil (altura, largura) {
    for (let linha = 0; linha < altura; linha++) {
        let linhaDeAsteriscos = "";
        
        for (let coluna = 0; coluna < largura; coluna ++) {
            linhaDeAsteriscos += "*  "
        }
        console.log(linhaDeAsteriscos)
    }
}           
function foto (altura, largura) {
    if (altura > largura) {
        asteriscoVolatil(altura, largura);
        console.log('foto modo: RETRATO');

    } else if (largura > altura) {
        asteriscoVolatil(altura, largura);
        console.log('foto modo: PAISAGEM');

    } else if (altura === largura) {
        asteriscoVolatil(altura, largura);
        console.log('foto modo: QUADRADA');

    }
}
foto(3,6)
