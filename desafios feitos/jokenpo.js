function jokenpo (jogador1) {

if (jogador1 === "pedra" || jogador1 === "papel" || jogador1 === "tesoura") {

        let jogador2 = "";

        function randomiza (item) {
        jogador2 = item[Math.floor(Math.random() * item.length)]
        }
        randomiza(["pedra","papel","tesoura"])

            console.log (`Você escolheu: ${jogador1} \n` + `Seu jogador2 escolheu: ${jogador2}`)

        if (jogador1 === "pedra" && jogador2 === "tesoura" || jogador1 === "papel" && jogador2 === "pedra" || jogador1 === "tesoura" && jogador2 === "papel") {   
            console.log("Você ganhou!")               
        } else if (jogador1 === jogador2) {
            console.log("Empate!")
        } else {
            console.log("Você perdeu!")
        }                     
    }
    if (jogador1 === "") {
        console.log("Ação inválida, digite novamente.")
    }
}

jokenpo("pedra")
