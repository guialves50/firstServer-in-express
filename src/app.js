import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão\n", error);
})

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());

function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  return res.status(200).send("Curso de Node.JS");
});

app.get("/livros", (req, res) => {
  return res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  return res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  return res.status(201).send("Livro registrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  return res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  return res.status(200).send("Livro removido com sucesso");
});

export default app;