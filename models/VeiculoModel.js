let veiculos = [
  { id: 1, nome: "Celta" },
  { id: 2, nome: "Corsa" },
  { id: 3, nome: "Clio" }
];

class VeiculoModel {
  static listar() {
    return veiculos;
  }

  static add(veiculo) {
    veiculos.push(veiculo);
    return veiculos;
  }

 static editar({ id, nome }) {
    const veiculoIndex = veiculos.findIndex(v => v.id === id);

    if (veiculoIndex !== -1) {
      veiculos[veiculoIndex].nome = nome;
    }
    return veiculos;
  }


  static del(id) {
    veiculos = veiculos.filter(v => v.id != id);
    return veiculos;
  }
}

module.exports = VeiculoModel;