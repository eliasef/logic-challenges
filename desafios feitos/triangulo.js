/* Crie uma função com os parâmetros l1,l2,l3 que representam os 3 lados de um triângulo, e imprima SE o triângulo é um triângulo ou não, e também diga que tipo de triângulo ele é, se é equilátero, escaleno ou isósceles.
Condições para ser um triângulo: um lado tem q ser menor que a soma dos outros dois!
Equilátero: todos os lados são iguais.
Escaleno: todos os lados são diferentes.
Isósceles: apenas dois lados são iguais.
Ótimo exercício para treinar a lógica, estrutura condicional e operadores lógicos!
*/
function triangulo (l1, l2, l3) {

let ehTriangulo = l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2 // p/ formar um triângulo, um lado tem q ser menor que a soma dos outros dois!

if (ehTriangulo === true) {
    console.log('Pode formar um triângulo.')
} else {
    console.log('Não pode formar um triângulo.')
}

let ehEquilatero = (l1 === l2) && (l2 === l3) 

let ehEscaleno = (l1 !== l2) && (l2 !== l3) && (l1 !== l3)

let ehIsosceles = (l1 === l2 && l1 !== l3) || (l2 === l3 && l2 !== l1) || (l1 === l3 && l1 !== l2) // aqui nós usamos o ||, pois já é testado todas as possibilidades dentro de um parênteses

if (ehEquilatero === true) {
    console.log('O triângulo é equilátero')
} else if (ehEscaleno === true) {
    console.log('O triângulo é escaleno')
} else if (ehIsosceles === true) {
    console.log('O triângulo é isósceles')
}

}
triangulo(4,3,4) 
         