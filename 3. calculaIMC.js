// classificação IMC: 
// Abaixo do PESO: 18.5    
// PESO NORMAL: de 18.6 a 24.9
// SOBREPESO: 25 a 29.9
// OBESIDADE GRAU I: 30 a 34.9
// OBESIDADE GRAU II: 35 a 39.9
// OBESIDADE GRAU III: maior ou igual a 40

// 1. Iprima o IMC + Classificação respectiva do mesmo
// 2. Imprima o peso ideal através de ("Está entre (peso_ideal_min e peso ideal_maximo)")


function calculaIMC(peso, altura) {

    var IMCcalculado = IMCcalculado = peso / (altura ** 2)

    if (IMCcalculado <= 18.5) {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está ABAIXO DO PESO!");
    } else if (IMCcalculado <= 24.9) {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está com o PESO NORMAL");
    } else if (IMCcalculado <= 29.9) {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está com SOBREPESO");
    } else if (IMCcalculado <= 34.9) {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está com OBESIDADE GRAU I");
    } else if (IMCcalculado <= 39.9) {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está com OBESIDADE GRAU II");
    } else {
        console.log("Seu IMC é de: " + IMCcalculado.toFixed(2) + "\n" + "E você está com OBESIDADE GRAU III");
    }

    const IMC_IDEAL_MINIMO = 18.6;
    const IMC_IDEAL_MAXIMO = 24.9;
    var pesoIdealMinimo = IMC_IDEAL_MINIMO * (altura ** 2);
    var pesoIdealMaximo = IMC_IDEAL_MAXIMO * (altura ** 2);

    console.log("O seu PESO IDEAL está entre: " + pesoIdealMinimo.toFixed(2) + " e " + pesoIdealMaximo.toFixed(2))
    
}
calculaIMC(70, 1.80)

