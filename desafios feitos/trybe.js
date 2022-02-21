/* Acabei de criar um exercício aqui que tem até a ver com a Trybe.
Olha a ideia:
Considere como parâmetro notaExercicios e notaDesafioPratico em sua função chamada aprovacaoTrybe, para saber se uma pessoa está aprovada ou reprovada.
Leve em consideração os seguintes pontos:
- O candidato deverá realizar os 38 exercícios do HackerRank que valerá de 0 a 1000 dependendo do número de acertos. Caso o candidato tire acima de 750 ele está aprovado, imprima "Você foi aprovado nos exercícios!" senão estará reprovado nessa etapa, imprima "Infelizmente ainda não foi aprovado, refaça os exercícios!".
-  Após aprovado na etapa de exercícios do HackerRank ele passará para a próxima etapa, realizar os 3 DESAFIOS PRÁTICOS. Acertando pelo menos 2 desafios ou os 3 desafios ele estará APROVADO. Nessa hipótese imprima "Parabéns, você foi aprovado no Desafio Prático!". Caso  acerte apenas 1 desafio ou nenhum desafio, imprima para o candidato "Você deverá refazer os Desafios Práticos!"
- Se o candidato passar em ambos, exercícios do HackerRank (38 exercícios) e nos Desafios Práticos, imprima "Você passou para a próxima fase, a entrevista!" */

function aprovacaoTrybe (notaExercicios, notaDesafioPratico) {

    if (notaExercicios > 750) {
        console.log("Você foi aprovado nos exercícios!")
    } else {
        console.log("Infelizmente ainda não foi aprovado, refaça os exercícios!")
    }
    if (notaDesafioPratico >= 2) {
        console.log("Parabéns, você foi aprovado no Desafio Prático!")   
    } else {
        console.log("Você deverá refazer os Desafios Práticos!")
    }
    if (notaExercicios > 750 && notaDesafioPratico >= 2) {
        console.log("Você passou para a próxima fase, a entrevista!")  
    }
}
aprovacaoTrybe(751,3)