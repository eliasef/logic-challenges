/* Calcular quantas pedras a catapulta lançará para qualquer novo número de rodadas, com um novo número de duração. 
 
Uma catapulta lançou 300 pedras em 5 rodadas de 15 minutos, cada. 
 
1. A partir dessa informação, crie um programa que receba 2 variáveis; 
 
rodadas 
duração 
2. Ao executar o programa, exibir na tela a quantidade de pedras que serão lançadas para os novos valores de rodadas e duração; 
 
3. Enviar a resposta do desafio considerando 8 rodadas de 7 minutos cada uma. */

function jogoCatapulta (rodadas, duracao) {


let pedrasPorRodada = 60; // cada rodada tem 60 pedras
let pedras = pedrasPorRodada * rodadas // pedras lançadas: multiplicando cada rodada por 60


console.log(`Serão lançadas: ${pedras} pedras em ${rodadas} rodadas de ${duracao} minutos.`)

}
jogoCatapulta(8,7)