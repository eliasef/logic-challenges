// Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

function personagemMorreu (dano, saude) {

    var vidaRestante = saude - dano;

    if (vidaRestante <= 0) {
        console.log("O personagem morreu - 1");
    } else {
        console.log("O personagem sobreviveu - 0");
    }

}
personagemMorreu(170,100);

    

