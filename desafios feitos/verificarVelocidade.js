// Velocidade máxima de até 70 
// a cada 5 km acima do limite você ganha 1 ponto
// Math.floor()
// caso pontos maior que 12 -> "Carteira suspensa"

function verificarVelocidade (velocidade) {

    const velocidadeMaxima = 70;
    const pontoPorKm = 5;

    let pontos = Math.floor((velocidade - velocidadeMaxima) / pontoPorKm)  // velocidade - 70 pq acima de 70 já é o limite, ent é só div / 5

    console.log(`Sua velocidade é de: ${velocidade} km/h`)

    if (velocidade <= velocidadeMaxima) {
        console.log("Ok")
    } else {  
        if (pontos >= 12) {
            console.log("Carteira Suspensa - pontos: " + pontos)
        } else {
            console.log('pontos: ' + pontos)
        }
    }
}
verificarVelocidade(130)