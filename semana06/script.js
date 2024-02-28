const prompt = require("prompt-sync")({sigint: true});

const teste = new Promise((resolve, reject) => {
    let numero = parseInt(prompt("Digite um número:"));
    if (numero % 2 === 0) {
        resolve(`O número digitado foi ${numero} ele é par`);
    } else {
        reject(`O número digitado foi ${numero} ele é impar`);
    }
});


teste
.then((par) => {
    console.log(par);
})

.catch((impar) => {
    console.log(impar);
})