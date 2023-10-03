import express from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const app = express();
//Indicar que o express irá ler body com JSON, sem isso o express não entenderá o formato JSON no body das requisições
app.use(express.json()); 

//ROTAS CRUD
//Listar todas as seleções
app.get("/selecoes", SelecaoController.index)

//Listar seleção por id
app.get("/selecoes/:id", SelecaoController.show)

//Criar seleção
app.post("/selecoes", SelecaoController.store)

//Alterar seleção por id
app.put("/selecoes/:id", SelecaoController.update)

//Apagar seleção por id
app.delete("/selecoes/:id", SelecaoController.delete)

export default app;
