import * as AlertaModel from '../../models/iot/alerta.model.js';

const alertaController = {
  async getAll(req, res) {
    const alertas = await AlertaModel.getAll();
    res.json(alertas);
  },
  async getById(req, res) {
    const alerta = await AlertaModel.getById(req.params.id);
    if (!alerta) return res.status(404).json({ error: 'Alerta no encontrada' });
    res.json(alerta);
  },
  async create(req, res) {
    const { id_sensor } = req.body;
    if (!id_sensor) {
      return res.status(400).json({ error: 'id_sensor requerido' });
    }
    const alerta = await AlertaModel.create({ id_sensor });
    res.status(201).json(alerta);
  },
  async update(req, res) {
    const { id_sensor } = req.body;
    const alerta = await AlertaModel.update(req.params.id, { id_sensor });
    if (!alerta) return res.status(404).json({ error: 'Alerta no encontrada' });
    res.json(alerta);
  },
  async delete(req, res) {
    await AlertaModel.delete(req.params.id);
    res.json({ message: 'Alerta eliminada' });
  },
};

export default alertaController;