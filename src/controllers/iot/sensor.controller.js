import * as SensorModel from '../../models/iot/sensor.model.js';

export async function getAll(req, res) {
    const sensores = await SensorModel.getAll();
    res.json(sensores);
}

export async function getById(req, res) {
    const sensor = await AlertaModel.getById(req.params.id);
    if (!sensor) return res.status(404).json({ message: 'No encontrado' });
    res.json(sensor);
}

export async function create(req, res) {
    const nuevo = await SensorModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await SensorModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteSensor(req, res) {
    await SensorModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}