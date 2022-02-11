function jogoDosTres (numero) {

    console.log("Seu número é: " + numero)

    let num1 = Math.floor(Math.random() * numero + 1)
    console.log("Número um é: " + num1)

    let num2 = Math.floor(Math.random() * numero + 1)
    console.log("Número um é: " + num2)

    let num3 = Math.floor(Math.random() * numero + 1)
    console.log("Número um é: " + num3)

    if (numero === num1 && numero === num2 && numero === num3) {
        console.log("Você ganhou!")
    }   else {
        console.log("Você perdeu!")
    }      
}
jogoDosTres(3)
