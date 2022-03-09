function sorteio (item) {

    let itemSorteado = [];          

    for (var cont = 0; cont < 2; cont++) {
        const indice = Math.floor(Math.random() * item.length);
        itemSorteado.push(item[indice])
        item.splice(indice,1)
    }
    return itemSorteado;
}
console.log(sorteio(["DC","Marvel","Sonic","Batman"]))
