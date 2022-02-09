// Programa que simule o Jokenpo! Basta escrever sua ação em letras minúsculas, chamando a função jokenpo.

function jokenpo (acao) {

if (acao === "pedra" || acao === "papel" || acao === "tesoura") {

    function randomiza (itens) { // array itens: [pedra,papel,tesoura]
    let oponente = itens[Math.floor(Math.random() * itens.length)]
    }
    randomiza(["pedra","papel","tesoura"])

    console.log("Você escolheu: " + acao + '\n' + "Seu oponente escolheu: " + oponente);

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
