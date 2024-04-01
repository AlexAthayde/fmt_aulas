class Carro {
  cor;
  modelo;
  marca;
  preco;

  acelerar(velocidade) {
    console.log(`O carro está acelerando a ${velocidade} km/h!!!`);
  }

  alterarCor(novaCor) {
    this.cor = novaCor;
  }

  alterarModelo(novoModelo) {
    this.modelo = novoModelo;
  }

  alterarMarca(novaMarca) {
    this.marca = novaMarca;
  }

  alterarPreco(novoPreco) {
    this.preco = novoPreco;
  }

  descrever() {
    console.log(this);
  }
}

let carroPrata = new Carro();
carroPrata.cor = "Prata";
carroPrata.modelo = "Corolla";
carroPrata.marca = "Toyota";
carroPrata.preco = 120000;

console.log(carroPrata);

carroPrata.acelerar(80);

let carroAzul = new Carro();
carroAzul.cor = "Azul";
carroAzul.modelo = "Renegade";
carroAzul.marca = "Jeep";
carroAzul.preco = 180000;
console.log(carroAzul);

carroAzul.alterarCor("Verde");
carroAzul.acelerar(120);

carroAzul.descrever()

