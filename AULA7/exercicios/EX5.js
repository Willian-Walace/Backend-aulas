class Maquinas {
  constructor(nome, quantidadeEixos, rpm, consumoEnergia) {
    this.nome = nome;
    this.quantidadeEixos = quantidadeEixos;
    this.rpm = rpm; 
    this.consumoEnergia = consumoEnergia; 
    this.ligada = false;
  }

  ligar() {
    if (!this.ligada) {
      this.ligada = true;
      console.log(`${this.nome} ligada com sucesso.`);
    } else {
      console.log(`${this.nome} já está ligada.`);
    }
  }

  desligar() {
    if (this.ligada) {
      this.ligada = false;
      console.log(`${this.nome} foi desligada.`);
    } else {
      console.log(`${this.nome} já está desligada.`);
    }
  }

  ajustarRotacao(novaRPM) {
    console.log(`Rotação da máquina ajustada de ${this.rpm} RPM para ${novaRPM} RPM.`);
    this.rpm = novaRPM;
  }
}

class Furadeira extends Maquinas {
  constructor(nome, rpm, consumoEnergia) {
  
    super(nome, 1, rpm, consumoEnergia);
  }

}

const minhaFuradeira = new Furadeira("Furadeira Bosch GSB 13 RE", 2800, 0.5);

console.log("\n--- Status Inicial ---");
console.log(`Nome: ${minhaFuradeira.nome}`);
console.log(`Eixos: ${minhaFuradeira.quantidadeEixos}`);
console.log(`RPM: ${minhaFuradeira.rpm}`);
console.log(`Consumo: ${minhaFuradeira.consumoEnergia} kWh`);

console.log("\n--- Operações ---");
minhaFuradeira.ligar();
minhaFuradeira.ajustarRotacao(3200);
minhaFuradeira.desligar();