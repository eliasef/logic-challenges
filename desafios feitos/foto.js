// Crie uma função chamada foto que receba na entrada dois parâmetros, largura e altura. E identifique se a foto foi tirada no modo retrato, paisagem ou quadrado. 
/* 
1. Imprima RETRATO caso a altura seja maior que a largura.
2. Imprima PAISAGEM caso a largura seja maior que a altura. 
3. Imprima QUADRADO caso a largura e altura sejam iguais.
4. Para cada condição acima, imprima uma matriz de asteriscos respectiva a cada condição.

Ex: Quando imprimir RETRATO, também imprima um retângulo de asteriscos, e etc. */

function foto (largura, altura) {
    
    if (altura > largura) {
        quadradoAsterisco(largura, altura)
        console.log(`Foto é: RETRATO`);
    } else if (largura > altura) {
        quadradoAsterisco(largura, altura)
        console.log(`Foto é: PAISAGEM`);
    } else if (largura === altura) {
        quadradoAsterisco(largura, altura)
        console.log(`Foto é: QUADRADA`);
    }
}

function quadradoAsterisco (largura, altura) {

    for (let i = 0; i < altura; i++) {
        let linhaDeAsteriscos = "";

        for (let c = 0; c < largura; c++) {
            linhaDeAsteriscos += "*  "
        }
        console.log(linhaDeAsteriscos)
    }
    
}
foto(6,6)