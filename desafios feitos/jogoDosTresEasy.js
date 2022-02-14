// Crie uma função que receba um parâmetro vazio:
// 1. Gere um número aleatório, chamado de entrada.
// 2. Gere mais três números aleatórios, chamados de num1,num2 e num3.
// 4. Se os três números forem iguais, imprima "Você ganhou!"
// 5. Se os três números e a entrada forem iguais, imprima "Você ganhou o prêmio máximo!"
// obs: o nome da function é jogoDosTresEasy, "easy" devido a não precisar chamar a entrada da função.

function jogoDosTresEasy () {

    let entrada;

    function randomiza (item) {
    entrada = item[Math.floor(Math.random() * item.length)]
    }
    randomiza([1,2,3]) // entrada só vale 1, 2 e 3

    console.log("Seu número é: " + entrada)

    let num1 = Math.floor(Math.random() * entrada + 1)
    console.log("Número um é: " + num1)

    let num2 = Math.floor(Math.random() * entrada + 1)
    console.log("Número dois é: " + num2)

    let num3 = Math.floor(Math.random() * entrada + 1)
    console.log("Número três é: " + num3)

    let soma = (num1 + num2 + num3) / 3

    if(soma === entrada) {
        console.log("Você ganhou o prêmio máximo!")
    } else if (num1 === num2 && num1 === num3) {
        console.log("Você ganhou!")
    } else {
        console.log("Você perdeu!")
    }  
}
jogoDosTresEasy()
