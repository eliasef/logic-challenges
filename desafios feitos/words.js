/*  Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word. 

Valor de teste: 'trybe' e 'be'
valor esperado no retorno da função: true
Dica: Use o SPLIT. */

function words (stringWord, stringEnding) {

let str2 = stringEnding.length;
let str1 = stringWord.substr(-str2)

if (stringEnding === str1) {
    return true
} else {
    return false
}

}

console.log(words('trybe','be'))