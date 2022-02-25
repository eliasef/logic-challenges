function jogoDosTres (numero) {

    console.log("Seu número é: " + numero)

    let num1 = Math.floor(Math.random() * numero + 1) //gera numero aleatorio entre numero, ex: 3 pode vim 1, 2 e 3, o +1 é para conseguir pegar o 3, exemplo: math.random vai multiplicar 0,7 * 4 -> arrendonda pra 3
    console.log("Número um é: " + num1)

    let num2 = Math.floor(Math.random() * numero + 1)
    console.log("Número um é: " + num2)

    let num3 = Math.floor(Math.random() * numero + 1)
    console.log("Número um é: " + num3)

    let soma = (num1 + num2 + num3) / 3 

    if (soma === numero) {
        console.log("Você ganhou o prêmio máximo!") // caso os numeros sejam todos iguais
    } else if (num1 === num2 && num1 === num3) {
        console.log("Você ganhou!") // caso num1, num2 e num3 sejam iguais
    } else {
        console.log("Você perdeu!")
    }
}
jogoDosTres(3)
