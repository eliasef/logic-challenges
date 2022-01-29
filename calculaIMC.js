// classificação IMC: 
// Abaixo do PESO: 18.5    
// PESO NORMAL: de 18.6 a 24.9
// SOBREPESO: 25 a 29.9
// OBESIDADE GRAU I: 30 a 34.9
// OBESIDADE GRAU II: 35 a 39.9
// OBESIDADE GRAU III: maior ou igual a 40


function calculaIMC(peso, altura) {

    var IMCcalculado;
    IMCcalculado = peso / (altura ** 2)

    if (IMCcalculado <= 18.5) {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está ABAIXO DO PESO!")
    } else if (IMCcalculado <= 24.9) {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está com o PESO NORMAL")
    } else if (IMCcalculado <= 29.9) {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está com SOBREPESO")
    } else if (IMCcalculado <= 34.9) {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está com OBESIDADE GRAU I")
    } else if (IMCcalculado <= 39.9) {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está com OBESIDADE GRAU II")
    } else {
        console.log("Seu IMC de: " + IMCcalculado + "\n" + "E você está com OBESIDADE GRAU III")
    }

    return IMCcalculado;
}
calculaIMC(70, 1.80)

