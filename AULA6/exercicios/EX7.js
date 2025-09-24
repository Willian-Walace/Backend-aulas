const livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1937,
  genero: "Fantasia",
  idadePublicacao: new Date().getFullYear() - 1937
};

console.log("Título:", livro["titulo"]);
console.log("Autor:", livro["autor"]);
console.log("Ano de Publicação:", livro["anoPublicacao"]);
console.log("Gênero:", livro["genero"]);
console.log("Idade da Publicação:", livro["idadePublicacao"], "anos");
