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
ehPalindromo("hannah")   
    