// Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100

function limitaPosicao (posicao) {

    if (posicao < 0 || posicao > 100) { //fora da tela, retorna 100 (valor corrigido)
        return 100
    } else { // dentro da tela
        return "Permanecerá dentro da tela"
    }
}
limitaPosicao(-70)

