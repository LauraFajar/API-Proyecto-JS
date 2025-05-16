import ActividadModel from '../../models/trazabilidad/actividadModel.js';

const actividadController = {
  async getAll(req, res) {
    const actividades = await ActividadModel.getAll();
    res.json(actividades);
  },
  async getById(req, res) {
    const actividad = await ActividadModel.getById(req.params.id);
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrada' });
    res.json(actividad);
  },
  async create(req, res) {
    const { id_cultivo } = req.body;
    if (!id_cultivo) return res.status(400).json({ error: 'id_cultivo requerido' });
    const actividad = await ActividadModel.create({ id_cultivo });
    res.status(201).json(actividad);
  },
  async update(req, res) {
    const { id_cultivo } = req.body;
    const actividad = await ActividadModel.update(req.params.id, { id_cultivo });
    if (!actividad) return res.status(404).json({ error: 'Actividad no encontrada' });
    res.json(actividad);
  },
  async delete(req, res) {
    await ActividadModel.delete(req.params.id);
    res.json({ message: 'Actividad eliminada' });
  },
};

export default actividadController;