class Pessoa {
  constructor(nome, idade, profissao, salario) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.salario = salario;
  }

  exibeTrabalho(nomeEmpresa, tempoTrabalho) {
    console.log(`${this.nome} trabalha na empresa ${nomeEmpresa} há ${tempoTrabalho} anos.`);
  }
}

const pessoa1 = new Pessoa("Lucas", 30, "Engenheiro", 8000);
pessoa1.exibeTrabalho("Tech Solutions", 5);