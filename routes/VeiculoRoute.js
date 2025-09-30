const express = require('express')
const router = express.Router()
const VeiculoController = require('../controllers/VeiculoController');

router.get('/', VeiculoController.listar);

router.get('/cadastrar', VeiculoController.cadastrarForm);

router.post('/add', VeiculoController.add);
router.post('/editar/:id', VeiculoController.editar);
router.post('/del/:id', VeiculoController.del);

module.exports = router;