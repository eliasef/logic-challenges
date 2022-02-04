// Crie uma função que encontra as vogais dentro de uma frase e imprima a vogal respectiva da frase.

function buscaVogais (frase) {

    var aTotal = 0    
    var eTotal = 0
    var iTotal = 0
    var oTotal = 0
    var uTotal = 0

    for (var i = 0; i < frase.length; i++) {

        if (frase[i] === 'a' || frase[i] === 'A') 
        aTotal ++
        else if (frase[i] === 'e' || frase[i] === 'E') 
        eTotal ++
        else if (frase[i] === 'i' || frase[i] === 'I') 
        iTotal ++
        else if (frase[i] === 'o' || frase[i] === 'O') 
        oTotal ++
        else if (frase[i] === 'u' || frase[i] === 'U') 
        uTotal ++

    }
console.log("Sua frase: " + frase)
console.log("Possui: " + aTotal + " a")
console.log("Possui: " + eTotal + " e")
console.log("Possui: " + iTotal + " i")
console.log("Possui: " + oTotal + " o")
console.log("Possui: " + uTotal + " u")
}
buscaVogais("Elias")