// função que só imprima a soma de dois números se a soma dos números for maior ou igual a 100.


function somaNumeros (num1, num2) {

    var soma = num1 + num2

    if (soma >= 100) {
        console.log(soma);
    } else {
        console.log("O somatório não é maior que 100");
    }


}
somaNumeros(10,1)