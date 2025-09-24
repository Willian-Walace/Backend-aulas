const livro = {
  titulo: "A Ilha do Tesouro",
  autor: "Robert Louis Stevenson",
  anoPublicacao: 1883,
  genero: "Romance", 
  idadePublicacao: new Date().getFullYear() - 1883
};

livro.genero = "Aventura";

console.log("Gênero atualizado:", livro.genero);
