import express from "express";
const app = express();
import conexao from "../infra/conexao.js"

//Indicar que o express irá ler body com JSON, sem isso o express não entenderá o formato JSON no body das requisições
app.use(express.json()); 

//ROTAS
app.get("/selecoes",(requisicao, resposta)=>{

    // resposta.send(selecoes); Chamar todas as seleções

    const sql = "select * from selecoes;"
    conexao.query(sql, (erro,resultado)=>{
        if(erro){
            resposta.status(404).json({"erro": erro})
        }else{
            resposta.status(200).json(resultado)
        }
    })
})

app.get("/selecoes/:id",(requisicao,resposta)=>{

    // resposta.json(buscarSelecaoPorId(requisicao.params.id)) Chamar as seleçoes por id

    const id = requisicao.params.id;
    const sql = "SELECT * FROM selecoes WHERE id = ?;"
    conexao.query(sql, id, (erro,resultado)=>{
        const linha = resultado[0]
        if(erro){
            resposta.status(404).json({"erro": erro})
        }else{
            resposta.status(200).json(linha)
        }
    })
})

app.post("/selecoes",(requisicao,resposta)=>{
    // selecoes.push(requisicao.body);
    // resposta.status(201).send("Seleçao cadastrada com sucesso!");

    const selecao = requisicao.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (erro,resultado)=>{
        
        if(erro){
            resposta.status(400).json({"erro": erro})
        }else{
            resposta.status(201).json(resultado)
        }
    })
})

app.delete("/selecoes/:id", (requisicao,resposta)=>{
    // let index = buscarIndexSelecao(requisicao.params.id)
    // selecoes.splice(index,1)
    // resposta.send(`Seleção com id ${requisicao.params.id} excluída com sucesso!`)

    const id = requisicao.params.id;
    const sql = "DELETE FROM selecoes WHERE id = ?;"
    conexao.query(sql, id, (erro,resultado)=>{
        if(erro){
            resposta.status(404).json({"erro": erro})
        }else{
            resposta.status(200).json(resultado)
        }
    })
})

app.put("/selecoes/:id", (requisicao,resposta)=>{
   

    const id = requisicao.params.id
    const selecao = requisicao.body
    const sql = "UPDATE selecoes SET ? WHERE id = ?;"
    conexao.query(sql, [selecao,id], (erro,resultado)=>{
        
        if(erro){
            resposta.status(400).json({"erro": erro})
        }else{
            resposta.status(200).json(resultado)
        }
    })
})


export default app;
