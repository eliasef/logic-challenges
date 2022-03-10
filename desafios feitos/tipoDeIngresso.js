function tipoDeIngresso (informacoes) {

    if (informacoes.temIngresso === true && informacoes.idade > informacoes.censura || informacoes.estaComPais === true) {
        if (informacoes.temCarteirinha === true || informacoes.idade < 16) {
            console.log('Meia entrada.');
        } else {
            console.log('Inteira.');
        }
    } else {
        console.log('Acesso negado!')
    }

}

tipoDeIngresso({
    temIngresso: false,
    idade: 19,
    temCarteirinha: false,
    censura: 16,
    estaComPais: 
})