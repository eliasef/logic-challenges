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


// NO MATH.ROUND SE PEGAR EXMP 0,7 * 4 #QUE É MEU LENGTH#, DÁ 3,6, E O ROUND VAI APROXIMAR PARA 4, QUE É UMA POSIÇÃO INEXISTENTE!!!!!!!!1
