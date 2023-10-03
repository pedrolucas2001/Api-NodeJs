import selecaoRepository from "../repositories/selecaoRepository.js";

class SelecaoController {

    //Função para ver todas as seleções existentes no BD
    async index(requisicao, resposta){
        const linha = await selecaoRepository.findAll()
        resposta.json(linha)
    }

    async show(requisicao,resposta){
        const id = requisicao.params.id;
        const linha = await selecaoRepository.findById(id)
        resposta.json(linha)
    }

    async store(requisicao,resposta){
        const selecao = requisicao.body
        const linha = await selecaoRepository.create(selecao)
        resposta.json(linha)
    }

    async update(requisicao,resposta){
        const id = requisicao.params.id
        const selecao = requisicao.body
        const linha = await selecaoRepository.update(selecao,id)
        resposta.json(linha)
        
    }

    async delete(requisicao,resposta){
        const id = requisicao.params.id;
        const linha = await selecaoRepository.delete(id)
        resposta.json(linha)
    }
}

export default new SelecaoController()
