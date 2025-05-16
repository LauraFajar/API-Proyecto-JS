import LoteModel from '../../models/trazabilidad/loteModel.js';

const loteController = {
  async getAll(req, res) {
    const lotes = await LoteModel.getAll();
    res.json(lotes);
  },
  async getById(req, res) {
    const lote = await LoteModel.getById(req.params.id);
    if (!lote) return res.status(404).json({ error: 'Lote no encontrado' });
    res.json(lote);
  },
  async create(req, res) {
    const { descripcion } = req.body;
    if (!descripcion) return res.status(400).json({ error: 'descripcion requerida' });
    const lote = await LoteModel.create({ descripcion });
    res.status(201).json(lote);
  },
  async update(req, res) {
    const { descripcion } = req.body;
    const lote = await LoteModel.update(req.params.id, { descripcion });
    if (!lote) return res.status(404).json({ error: 'Lote no encontrado' });
    res.json(lote);
  },
  async delete(req, res) {
    await LoteModel.delete(req.params.id);
    res.json({ message: 'Lote eliminado' });
  },
};

export default loteController;