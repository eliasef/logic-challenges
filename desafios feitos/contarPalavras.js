// Escreva uma função que diz quantas palavras existem em uma frase (string).

function contarPalavras (str) {
    return str.trim().split(/\s+/).length; // .trim() conta os caracteres vazios left e rigth da string // .split(/\s+\).length é um "canivete suíço" chamado "Expressão Regular", que tem 1001 utilidades. Ela entra dentro da string, e após um "espaço/caracter vazio" ela conta o seu comprimento com o .length
}
console.log(contarPalavras(" Olá, Mundo! Me chamo Elias. "))
