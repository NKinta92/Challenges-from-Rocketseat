    // CALCULO DE IMC

const nome = "Nuno Faria";
const peso = 90;
const altura = 1.72;
const imc = 30.4
    //console.log(peso / (altura * altura)) esta conta define o IMC (Indice de Massa Corporal)

if (imc >= 30 ){
    console.log("Nuno voce esta a cima do peso")
} else {
    console.log("Nuno voce nao esta a cima do peso")
}

     // CALCULO DE APOSENTADORIA

const nome2 = "Nuno Faria";
const sexo = "M";
const idade = 28;
const contribuicao = 8;

if (contribuicao >= 35) {
    if (idade + contribuicao >= 95) {
        console.log("Nuno Faria voce pode se aposentar")
    } else {
        console.log("Nuno Faria, você ainda não pode se aposentar")
    }
} else {
    console.log("Nuno Faria, você ainda não pode se aposentar")
}




