import TieneModel from '../../models/trazabilidad/tieneModel.js';

const tieneController = {
  async getAll(req, res) {
    const tiene = await TieneModel.getAll();
    res.json(tiene);
  },
  async getById(req, res) {
    const tiene = await TieneModel.getById(req.params.id);
    if (!tiene) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(tiene);
  },
  async create(req, res) {
    const { id_lote, id_cultivo } = req.body;
    if (!id_lote || !id_cultivo) return res.status(400).json({ error: 'id_lote y id_cultivo requeridos' });
    const nuevo = await TieneModel.create({ id_lote, id_cultivo });
    res.status(201).json(nuevo);
  },
  async update(req, res) {
    const { id_lote, id_cultivo } = req.body;
    const actualizado = await TieneModel.update(req.params.id, { id_lote, id_cultivo });
    if (!actualizado) return res.status(404).json({ error: 'Registro no encontrado' });
    res.json(actualizado);
  },
  async delete(req, res) {
    await TieneModel.delete(req.params.id);
    res.json({ message: 'Registro eliminado' });
  },
};

export default tieneController;