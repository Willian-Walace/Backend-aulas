const readline = require("readline");

class Cliente {
  constructor(nome, profissao, saldo) {
    this.nome = nome;
    this.profissao = profissao;
    this.saldo = saldo;
  }

  pix(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para fazer o Pix.");
    } else {
      this.saldo -= valor;
      console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  }

  emprestimo(valor) {
    this.saldo += valor;
    console.log(`Empréstimo de R$${valor.toFixed(2)} recebido.`);
  }

  saque(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado.`);
    }
  }

  extrato() {
    console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function iniciarBanco() {
  rl.question("Digite seu nome: ", (nome) => {
    rl.question("Digite sua profissão: ", (profissao) => {
      rl.question("Digite seu saldo inicial: ", (saldoInicial) => {
        const cliente = new Cliente(nome, profissao, parseFloat(saldoInicial));
        mostrarMenu(cliente);
      });
    });
  });
}

function mostrarMenu(cliente) {
  console.log(`\nBem-vindo(a), ${cliente.nome}! Escolha uma opção:`);
  console.log("1 - Pix");
  console.log("2 - Empréstimo");
  console.log("3 - Saque");
  console.log("4 - Extrato");
  console.log("5 - Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Digite o valor do Pix: ", (valor) => {
          cliente.pix(parseFloat(valor));
          mostrarMenu(cliente);
        });
        break;
      case "2":
        rl.question("Digite o valor do Empréstimo: ", (valor) => {
          cliente.emprestimo(parseFloat(valor));
          mostrarMenu(cliente);
        });
        break;
      case "3":
        rl.question("Digite o valor do Saque: ", (valor) => {
          cliente.saque(parseFloat(valor));
          mostrarMenu(cliente);
        });
        break;
      case "4":
        cliente.extrato();
        mostrarMenu(cliente);
        break;
      case "5":
        console.log("Encerrando...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        mostrarMenu(cliente);
    }
  });
}

iniciarBanco();