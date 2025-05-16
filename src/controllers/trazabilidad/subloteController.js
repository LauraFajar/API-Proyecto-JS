import SubloteModel from '../../models/trazabilidad/subloteModel.js';

const subloteController = {
  async getAll(req, res) {
    const sublotes = await SubloteModel.getAll();
    res.json(sublotes);
  },
  async getById(req, res) {
    const sublote = await SubloteModel.getById(req.params.id);
    if (!sublote) return res.status(404).json({ error: 'Sublote no encontrado' });
    res.json(sublote);
  },
  async create(req, res) {
    const { id_lote, descripcion } = req.body;
    if (!id_lote || !descripcion) return res.status(400).json({ error: 'id_lote y descripcion requeridos' });
    const sublote = await SubloteModel.create({ id_lote, descripcion });
    res.status(201).json(sublote);
  },
  async update(req, res) {
    const { id_lote, descripcion } = req.body;
    const sublote = await SubloteModel.update(req.params.id, { id_lote, descripcion });
    if (!sublote) return res.status(404).json({ error: 'Sublote no encontrado' });
    res.json(sublote);
  },
  async delete(req, res) {
    await SubloteModel.delete(req.params.id);
    res.json({ message: 'Sublote eliminado' });
  },
};

export default subloteController;