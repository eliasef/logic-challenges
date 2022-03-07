function zeroOuUm (player1, player2, player3) {

    let empate = player1 + player2 + player3;

    if (player1 === 0 && player2 === 1 && player3 === 1 || player1 === 1 && player2 === 0 && player2 === 0) {
        console.log('Player1 Win!') // tdas as condições de vitória pro player1
    }
    else if (player2 === 1 && player1 === 0 && player3 === 0 || player2 === 0 && player1 === 1 && player3 === 1) {
        console.log('Player2 Win!')
    }
    else if (empate === 0 || empate === 3) {
        console.log('Empate!')
    }
    else if (player1 !== 0 && player2 !== 0 && player3 !== 0 || player1 !== 1 && player2 !== 1 && player3 !== 1 || isNaN(empate)) {
        console.log('Valor inválido. Digite 0 ou 1!')
    }
    else {
        console.log('Player3 Win!')
    } 
}
zeroOuUm(0,1,0)