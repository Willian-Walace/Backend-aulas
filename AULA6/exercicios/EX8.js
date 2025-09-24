const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  genero: "Fantasia",
  idadePublicacao: new Date().getFullYear() - 1954,
  avaliacao: null 
};

const novaAvaliacao = 10.0;

if (livro.avaliacao === null) {
  livro.avaliacao = novaAvaliacao;
  console.log("Avaliação atribuída com sucesso:", livro.avaliacao);
} else {
  console.log("O livro já possui uma avaliação:", livro.avaliacao);
}
