import CultivoModel from '../../models/trazabilidad/cultivoModel.js';

const cultivoController = {
  async getAll(req, res) {
    const cultivos = await CultivoModel.getAll();
    res.json(cultivos);
  },
  async getById(req, res) {
    const cultivo = await CultivoModel.getById(req.params.id);
    if (!cultivo) return res.status(404).json({ error: 'Cultivo no encontrado' });
    res.json(cultivo);
  },
  async create(req, res) {
    const { id_insumo } = req.body;
    if (!id_insumo) return res.status(400).json({ error: 'id_insumo requerido' });
    const cultivo = await CultivoModel.create({ id_insumo });
    res.status(201).json(cultivo);
  },
  async update(req, res) {
    const { id_insumo } = req.body;
    const cultivo = await CultivoModel.update(req.params.id, { id_insumo });
    if (!cultivo) return res.status(404).json({ error: 'Cultivo no encontrado' });
    res.json(cultivo);
  },
  async delete(req, res) {
    await CultivoModel.delete(req.params.id);
    res.json({ message: 'Cultivo eliminado' });
  },
};

export default cultivoController;