import conexao from "../database/conexao.js"
class SelecaoRepository{
    //CRUD
    create(selecao){
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,selecao,(erro,resultado)=>{
                if(erro) return reject("Não foi possível lcadastrar")
                
                //Fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado))
                return resolve(linha)
            })
        })
    }

    //Listar todas seleções
    findAll(){
        const sql = "select * from selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,(erro,resultado)=>{
                if(erro) return reject("Não foi possível localizar")

                //Fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado))
                return resolve(linha)
            })
        })
    }

    findById(id){ 
        const sql = "SELECT * FROM selecoes WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,id,(erro,resultado)=>{
                if(erro) return reject("Não foi possível localizar")

                //Fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado))
                return resolve(linha)
            })
        })
    }

    update(selecao, id){
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,[selecao,id],(erro,resultado)=>{
                if(erro) return reject("Não foi possível atualizar")

                //Fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado))
                return resolve(linha)
            })
        })
    }

    delete (id){
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,id,(erro,resultado)=>{
                if(erro) return reject("Não foi possível apagar")

                //Fazer o parse dos resultados
                const linha = JSON.parse(JSON.stringify(resultado))
                return resolve(linha)
            })
        })
    }

}

export default new SelecaoRepository(); 
