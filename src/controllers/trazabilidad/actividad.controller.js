import * as ActividadModel from '../../models/trazabilidad/actividad.model.js';

export async function getAll(req, res) {
    const actividades = await ActividadModel.findAll();
    res.json(actividades);
}

export async function getById(req, res) {
    const actividad = await ActividadModel.findById(req.params.id);
    if (!actividad) return res.status(404).json({ message: 'No encontrado' });
    res.json(actividad);
}

export async function create(req, res) {
    const nuevo = await ActividadModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await ActividadModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteActividad(req, res) {
    await ActividadModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}