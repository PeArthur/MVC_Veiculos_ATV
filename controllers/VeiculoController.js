const VeiculoModel = require('../models/VeiculoModel'); 
class VeiculoController {
  
  static listar(req, res) {
    const lista = VeiculoModel.listar();
    res.render('listar', { veiculos: lista });
  }

  static cadastrarForm(req, res) {
    res.render('cadastrar');
  }

  static add(req, res) {
    const { id, nome } = req.body;
    VeiculoModel.add({ id: Number(id), nome });
    res.redirect('/');
  }

  static editar(req, res) {
    const { id } = req.params; 
    const { nome } = req.body; 
    VeiculoModel.editar({ id: Number(id), nome });
    
    res.redirect('/');
    }

  static del(req, res) {
    const { id } = req.params;
    VeiculoModel.del(Number(id));
    res.redirect('/');
  }
}

module.exports = VeiculoController;