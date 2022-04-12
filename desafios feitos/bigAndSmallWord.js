// 3. 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > biggestWord.length) {
        biggestWord = array[i];
    }
}

for (let i2 = 0; i2 < array.length; i2++) {
    if (array[i2].length < smallestWord.length) {
        smallestWord = array[i2]
    }
}

console.log(biggestWord)
console.log(smallestWord)

