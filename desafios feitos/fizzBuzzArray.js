function fizzBuzzArray (numeros) {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
            console.log("FizzBuzz:", numeros[i])
        } else if (numeros[i] % 3 === 0) {
            console.log("Fizz:", numeros[i])
        } else if (numeros[i] % 5 === 0) {
            console.log("Buzz:", numeros[i])
         
        } else {
            console.log("Bug:", numeros[i])
        }
    }
    

}
fizzBuzzArray([2,3,5,8,15])