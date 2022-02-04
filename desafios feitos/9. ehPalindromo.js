// Crie uma função que retorne se a palavra é uma palíndromo ou não. Se sim, retorne "SIM, sou um PALÍNDROMO". Se não, retorne "NÃO, não sou um PALÍNDROMO." 
// obs: palíndromos são palavras que, escritas de trás pra frente tornam-se iguais de como escritas normalmente. Ex: "ovo"

function ehPalindromo (palavra) {

    var palindromo = ""
    
    for (var i = palavra.length -1; i >= 0; i--) {
        palindromo += palavra[i]
    }
    
    if (palavra === palindromo && palavra != "") {
        return "SIM, sou um PALÍNDROMO."
    } else {
        return "NÃO, não sou um PALÍNDROMO."
    }
    
    }
ehPalindromo("ovo")   
