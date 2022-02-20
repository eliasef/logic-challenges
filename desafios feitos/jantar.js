/* Você foi jantar em um restaurante chique, em uma cidade turística. O conta que você pediu custou R$100,00. Porém o restaurante possui uma taxa de 10% sobre o valor da conta por ser um lugar turístico. Crie uma solução
para calcular o valor final da conta, adicionando a possibilidade de pagar 5% da gorjeta ou não.*/

function jantar (conta, queroGorjeta) { 

    let taxa = conta * 0.1; 
    let gorjeta = conta * 0.05; 
    let totalSemGorj = conta + taxa;
    let totalComGorj = conta + taxa + gorjeta;

    if (queroGorjeta === "não") {
        console.log(`Sua conta: ${conta} \nTaxa: ${taxa}\nTotal: ${totalSemGorj}`)
    } 
    else if (queroGorjeta !== "sim") {
         console.log('Ação inválida, digite novamente')        
    }
    else {
        console.log(`Sua conta: ${conta} \nTaxa: ${taxa}\nGorjeta: ${gorjeta} \nTotal: ${totalComGorj}`)
    }
} 
jantar(100,"sim")
