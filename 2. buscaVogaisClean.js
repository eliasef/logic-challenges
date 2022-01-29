// escreva uma função q encontra aTotalis em uma frase, e retorne uma string respectiva da aTotall + a aTotall

// 1. Imprima a frase (parâmetro)
// 2. Imprima a quantia de vogais totais MAIÚSCULAS e MINÚSCULAS em forma de número (ex: tem 5 vogais!)
// 3. Imprima as vogais totais em forma de string (ex: vogais da frase "Elias": eia)
// 4. Imprima a vogal respectiva de cada frase. (Ex: na frase, 1 são "e", 1 são "i", 1 são "a" )

function buscaVogais (frase) {

    var aTotal = 0    
    var eTotal = 0
    var iTotal = 0
    var oTotal = 0
    var uTotal = 0
    var vogTotalemNumber = 0
    var vogTotalemString = ""

for (var i = 0; i < frase.length; i++) {

    if (frase[i] === 'a' || frase[i] === 'A') aTotal ++, vogTotalemNumber ++, vogTotalemString += "a" 
    else if (frase[i] === 'e' || frase[i] === 'E') eTotal ++, vogTotalemNumber ++, vogTotalemString += "e" 
    else if (frase[i] === 'i' || frase[i] === 'I') iTotal ++, vogTotalemNumber ++, vogTotalemString += "i"
    else if (frase[i] === 'o' || frase[i] === 'O') oTotal ++, vogTotalemNumber ++, vogTotalemString += "o"  
    else if (frase[i] === 'u' || frase[i] === 'U') uTotal ++, vogTotalemNumber ++, vogTotalemString += "u"

}

console.log('A sua frase: "' + frase + '"' + "\n" + 
'Possui um total de ' + vogTotalemNumber + ' vogais!' + "\n"
+ 'Elas são: ' + vogTotalemString   + '\n' 
+ 'Das quais: '                     + '\n' 
 + aTotal + ' são "a",'             + '\n'  
 + eTotal + ' são "e",'             + '\n'  
 + iTotal + ' são "i",'             + '\n'  
 + oTotal + ' são "o",'             + '\n' 
 + uTotal + ' são "u".')                                                                                  
}
buscaVogais("Vamos entrar na trybe! #goTurma22 <3")
