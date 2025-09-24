class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motorLigado = false; 
  }

  ligar_motor() {
    this.motorLigado = true;
  }

  desligar_motor() {
    this.motorLigado = false;
  }

  status_motor() {
    if (this.motorLigado) {
      return "O motor está ligado.";
    } else {
      return "O motor está desligado.";
    }
  }
}

const meuCarro = new Carro("HONDA", "CIVIC", 1995);

console.log(meuCarro.status_motor());

meuCarro.ligar_motor();
console.log(meuCarro.status_motor());

meuCarro.desligar_motor();
console.log(meuCarro.status_motor());