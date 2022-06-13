const express = require('express');
const PessoaController = require('../controllers/PessoaController');
const NivelController = require('../controllers/NivelController');
const TurmaController = require('../controllers/TurmaController')

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send({message:'boas vindas a API!'})
});
// Rotas Pessoas
router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatricula);
router.get('/pessoas/matricula/:turma_id/confirmadas', PessoaController.pegaMatriculasPorTurma);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.post('pessoas/:id/restaura', PessoaController.restauraPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudandeId/matricula', PessoaController.criaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

// Rotas Nivel
router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);
router.post('/niveis', NivelController.criaNivel);
router.put('/niveis/:id', NivelController.atualizaNivel);
router.delete('/niveis/:id', NivelController.apagaNivel);

// Rotas Turmas
router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaUmaTurma);
router.post('/turmas', TurmaController.criaTurma);
router.put('/turmas/:id', TurmaController.atualizaTurma);
router.delete('/turmas/:id', TurmaController.apagaTurma);



module.exports=router;