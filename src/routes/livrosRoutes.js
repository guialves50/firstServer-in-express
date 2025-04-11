import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/autores", LivroController.listarLivros);
routes.get("/autores/:id", LivroController.listarLivroPorId);
routes.post("/autores", LivroController.cadastrarLivro);
routes.put("/autores/:id", LivroController.atualizarLivro);
routes.delete("/autores/:id", LivroController.deletarLivro);

export default routes;
