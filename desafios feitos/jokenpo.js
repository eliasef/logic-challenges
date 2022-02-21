// Programa que simula o Jokenpo! Basta escrever sua entrada sendo uma string com letras minúsculas, chamando a função jokenpo.
// 1. A entrada é jogador1, que deve receber a string pedra, papel ou tesoura.
// 2. A saída deve seve imprimir se você ganhou ou perdeu.

function jokenpo (jogador1) {

if (jogador1 === "pedra" || jogador1 === "papel" || jogador1 === "tesoura") {

        let jogador2 = "";

        function randomiza (item) {
        jogador2 = item[Math.floor(Math.random() * item.length)]
        }
        randomiza(["pedra","papel","tesoura"])

            console.log (`Você escolheu: ${jogador1} \n` + `Seu oponente escolheu: ${jogador2}`)

    const PEDRA_GANHA = jogador1 === "pedra" && jogador2 === "tesoura"
    const PAPEL_GANHA = jogador1 === "papel" && jogador2 === "pedra"
    const TESOURA_GANHA = jogador1 === "tesoura" && jogador2 === "papel"

        if (PEDRA_GANHA === true || PAPEL_GANHA === true || TESOURA_GANHA === true) {   
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
