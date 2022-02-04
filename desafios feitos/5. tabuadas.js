// Crie uma função que o parâmetro seja um array de números, eloborando uma tabuada que imprima a tabuada de vários números.
// ex: imprima a tabuada de 2, 3 e 4 dentro da mesma função.


function tabuadas (num) { //num é um array

    for (var i = 0; i < num.length; i++) {
        var tabuada = []
        console.log("Tabuada do: " + num[i])

        for (var multiplicador = 1; multiplicador <= 10; multiplicador++) {
            tabuada.push(num[i] * multiplicador);
        }
        console.log(tabuada);
    }

}  
    
tabuadas([2,3,4])