// escreva uma função que receba como parâmetro um array de numeros onde:
// 1. diga os pares desse array
// 2. diga os impares desse array
// 3. diga o maior par desse array
// 4. diga o maior impar desse array

function encontraMaiorParImpar (numeros) { //numeros é um array // array: [2,3,5,77]

    var pares = [];
    var impares = [];
    var parMaior = 0;
    var imparMaior = 0;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
            if (numeros[i] > parMaior) {
                parMaior = numeros[i]
            }
        } else {
            impares.push(numeros[i]);
            if (numeros[i] > imparMaior) {
                imparMaior = numeros[i]
            }
        }
    }
console.log("pares: " + pares)
console.log("ímpares: " + impares)
console.log("maior par: " + parMaior)
console.log("maior ímpar: " + imparMaior)
}
encontraMaiorParImpar([2,3,4,5,777,666])