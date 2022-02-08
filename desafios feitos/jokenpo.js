/* Disputando o controle remoto da TV, dois irmãos, João e André decidiram quem ficaria com o controle jogando pedra, papel ou tesoura.

Cada jogador escolhe uma das opções para jogar, sendo que:

Perdra ganha de tesoura, mas perde de papel
Papel ganha de pedra, mas perde de tesoura
Tesoura ganha de papel, mas perde de pedra
Caso ambos os jogadores joguem a mesma coisa, há um empate
O seu objetivo é fazer um programa de computador que determine quem é o vencedor do jogo, ou informar se houve um empate */

function jokenpo (joao, andre) {

    
   
    if (joao === "PEDRA" && andre === "TESOURA" || joao === "PAPEL" && andre === "PEDRA" || joao === "TESOURA" && andre === "PAPEL") {  // wins possíveis do joao
        console.log("JOAO")
    } else if (andre === "PEDRA" && joao === "TESOURA" || andre === "PAPEL" && joao === "PEDRA" || andre === "TESOURA" && joao === "PAPEL") { // wins possíveis do andre
        console.log("ANDRE")
    } else if (joao === andre) {
        console.log("EMPATE")
    }

}   
jokenpo ("PEDRA","PEDRA")