import * as SensorModel from '../../models/iot/sensor.model.js';

const sensorController = {
  async getAll(req, res) {
    const sensores = await SensorModel.getAll();
    res.json(sensores);
  },
  async getById(req, res) {
    const sensor = await SensorModel.getById(req.params.id);
    if (!sensor) return res.status(404).json({ error: 'Sensor no encontrado' });
    res.json(sensor);
  },
  async create(req, res) {
    const { tipo_sensor, id_sublote, estado } = req.body;
    if (!tipo_sensor || !id_sublote || !estado) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }
    const sensor = await SensorModel.create({ tipo_sensor, id_sublote, estado });
    res.status(201).json(sensor);
  },
  async update(req, res) {
    const { tipo_sensor, id_sublote, estado } = req.body;
    const sensor = await SensorModel.update(req.params.id, { tipo_sensor, id_sublote, estado });
    if (!sensor) return res.status(404).json({ error: 'Sensor no encontrado' });
    res.json(sensor);
  },
  async delete(req, res) {
    await SensorModel.delete(req.params.id);
    res.json({ message: 'Sensor eliminado' });
  },
};

export default sensorController;