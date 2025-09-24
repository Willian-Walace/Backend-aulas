const anoAtual = new Date().getFullYear();

const livro = {
  titulo: "1984",
  autor: "George Orwell",
  anoPublicacao: 1949,
  genero: "Distopia"
};

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

const mostrarDetalhes = `
Título: ${livro.titulo}
Autor: ${livro.autor}
Ano de Publicação: ${livro.anoPublicacao}
Gênero: ${livro.genero}
Idade da Publicação: ${livro.idadePublicacao} anos
`;

console.log(mostrarDetalhes);
