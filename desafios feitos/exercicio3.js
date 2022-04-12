// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

let mediaArit = total / numbers.length

console.log(mediaArit)