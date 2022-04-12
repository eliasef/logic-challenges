/* Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: 
{
 pares: 0, 
 ímpares: 0 
} 
*/

function paresImpares (numeros)  {

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares ++
    } else {
        impares ++
    }
}

let resposta = {
    pares: pares,
    impares: impares
}

return resposta

}

console.log(paresImpares([2,3,4,5,6,7,8]))

