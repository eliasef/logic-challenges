function jokenpo (acao) {

if (acao === "pedra" || acao === "papel" || acao === "tesoura") {

        let oponente = "";

        function randomiza (item) {
        oponente = item[Math.floor(Math.random() * item.length)]
        }
        randomiza(["pedra","papel","tesoura"])

            console.log ("Você escolheu: " + acao + '\n' + "Seu oponente escolheu: " + oponente)

        if (acao === "pedra" && oponente === "tesoura" || acao === "papel" && oponente === "pedra" || acao === "tesoura" && oponente === "papel") {   
            console.log("Você ganhou!")               
        } else if (acao === oponente) {
            console.log("Empate!")
        } else {
            console.log("Você perdeu!")
        }                     
    }
    if (acao === "") {
        console.log("Ação inválida, digite novamente.")
    }
}

jokenpo("pedra")