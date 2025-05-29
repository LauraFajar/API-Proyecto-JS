import * as TieneModel from '../../models/trazabilidad/tiene.model.js';

export async function getAll(req, res) {
    const tienes = await TieneModel.findAll();
    res.json(tienes);
}

export async function getById(req, res) {
    const tiene = await TieneModel.findById(req.params.id);
    if (!tiene) return res.status(404).json({ message: 'No encontrado' });
    res.json(tiene);
}

export async function create(req, res) {
    const nuevo = await TieneModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await TieneModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteTiene(req, res) {
    await TieneModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}