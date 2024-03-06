// // const prompt = require("prompt-sync")({sigint: true});

// function ModuloMatematico() {
//   let x = 0;
//   function somaUm() {
//     x++;
//     console.log(x);
//   }
//   function subtraiUm() {
//     x--;
//     console.log(x);
//   }
//   return {
//     somaUm: somaUm,
//     subtraiUm: subtraiUm,
//   };
// }
// var teste = ModuloMatematico();
// teste.somaUm(); // 1
// teste.somaUm(); // 2
// teste.somaUm(); // 3
// teste.subtraiUm(); // 2

class Produto {
    nome;
    preco;
    quantidade;
}

class Bic extends Produto{
    marca = "Bic"
}

let produto = new Produto();
produto.nome = "Caneta";
produto.preco = "R$ 1,00";
produto.quantidade = 1;

console.log(produto);

let produto2 = new Bic();
console.log(produto2);