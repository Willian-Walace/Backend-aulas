class Produto {
  constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
    this.tipoComunicacao = tipoComunicacao;
    this.consumoEnergia = consumoEnergia;
    this.ligado = false;
  }

  ligar() {
    if (!this.ligado) {
      this.ligado = true;
      console.log(`${this.nome} está agora ligado.`);
    } else {
      console.log(`${this.nome} já está ligado.`);
    }
  }

  desligar() {
    if (this.ligado) {
      this.ligado = false;
      console.log(`${this.nome} foi desligado.`);
    } else {
      console.log(`${this.nome} já está desligado.`);
    }
  }

  ajustarTemperatura(setpoint) {
    console.log(`${this.nome} não suporta ajuste de temperatura.`);
  }
}

class Fritadeira extends Produto {
  ajustarTemperatura(setpoint) {
    console.log(`Fritadeira ajustada para ${setpoint}°C.`);
  }
}

class Televisao extends Produto {
  ajustarTemperatura(setpoint) {
    console.log(`Televisão não precisa de ajuste de temperatura.`);
  }
}

class ArCondicionado extends Produto {
  ajustarTemperatura(setpoint) {
    console.log(`Ar-condicionado ajustado para ${setpoint}°C.`);
  }
}

const fritadeira = new Fritadeira("Fritadeira Elétrica", 10, 349.99, "Wi-Fi", "1500W");
const tv = new Televisao("TV Samsung 55\"", 5, 2999.90, "Bluetooth", "200W");
const ar = new ArCondicionado("Ar Split LG", 3, 2199.00, "Wi-Fi", "1200W");

fritadeira.ligar();
fritadeira.ajustarTemperatura(200);
fritadeira.desligar();

console.log('---');

tv.ligar();
tv.ajustarTemperatura(22);
tv.desligar();

console.log('---');

ar.ligar();
ar.ajustarTemperatura(18);
ar.desligar();