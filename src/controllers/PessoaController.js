const database = require('../models');

class PessoaController{
    static async pegaTodasAsPessoas(req,res){
        try{
            const pegaTodasAsPessoas  = await database.Pessoas.findAll()
            return res.status(200).json(pegaTodasAsPessoas)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req,res){
        const {id} = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne( {id} )
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req,res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req,res){
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos,{ where: { id:Number(id) } } )
            const pessoaAtualizada = await database.Pessoas.findOne( {id} )
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req,res){
        const {id} = req.params
        try{
            await database.Pessoas.findByIdAndDelete({id})
            return res.status(200).json({ message: `id ${id} deletado` })
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports= PessoaController;