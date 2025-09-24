const livro = {
  titulo: "As Crônicas de Nárnia",
  autor: "C.S. Lewis",
  anoPublicacao: 1950,
  genero: "Fantasia",
  idadePublicacao: new Date().getFullYear() - 1950,
  avaliacao: 4.5
};

delete livro.avaliacao;

console.log("Detalhes do livro (sem avaliação):");
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade da Publicação:", livro.idadePublicacao, "anos");

console.log("Avaliacao existe?", livro.hasOwnProperty("avaliacao")); // false
