// crie uma função que receba como parâmetro um número n, eloborando uma tabuada onde sempre retorne o valor de n multiplicado de até 10 em um array.

function tabuadaArray (n) {

    var multiplicados = []

    for (i = 1; i <= 10; i++) {
        multiplicados.push(n * i)
    }
return multiplicados;
}
tabuadaArray(2)