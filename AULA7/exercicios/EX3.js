class Automovel {
  constructor(cor, modelo, combustivel, rodas) {
    this.cor = cor;
    this.modelo = modelo;
    this.combustivel = combustivel;
    this.rodas = rodas;
  }

  ligar() {
    console.log(`${this.modelo}: Ligando o veículo...`);
  }

  desligar() {
    console.log(`${this.modelo}: Desligando o veículo...`);
  }

  abrirVidro() {
    console.log(`${this.modelo}: Abrindo o vidro...`);
  }

  descerVidro() {
    console.log(`${this.modelo}: Descendo o vidro...`);
  }
}


class Carro extends Automovel {}
class Moto extends Automovel {}
class Caminhao extends Automovel {}

const carro1 = new Carro("Preto", "Civic", "Gasolina", 4);
carro1.ligar();
carro1.abrirVidro();
carro1.descerVidro();
carro1.desligar();

const caminhao1 = new Caminhao("Azul", "Volvo", "Diesel", 6);
caminhao1.ligar();
caminhao1.abrirVidro();
caminhao1.descerVidro();
caminhao1.desligar();