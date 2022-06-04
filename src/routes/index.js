const express = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send({message:'boas vindas a API!'})
});

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);

module.exports=router;