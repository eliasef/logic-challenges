/* Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano false.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne null. */

function tresArgumentos (arg1, arg2, arg3) {

    

    if (arg1 !== undefined && arg2 === undefined && arg3 === undefined) { // só 1 arg
        return arg1
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 === undefined) { // 2 arg
        return arg1 + arg2
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) { // 3 arg
        return (arg1 + arg2) / arg3
    } else if (arg1 === undefined && arg2 === undefined && arg3 === undefined) { // 0 arg
        return false
    } else {
        return null
    }


}
tresArgumentos(2,2,2)
