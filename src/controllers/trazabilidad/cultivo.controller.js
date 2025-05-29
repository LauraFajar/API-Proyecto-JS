import * as CultivoModel from '../../models/trazabilidad/cultivo.model.js';

export async function getAll(req, res) {
    const cultivos = await CultivoModel.findAll();
    res.json(cultivos);
}

export async function getById(req, res) {
    const cultivo = await CultivoModel.findById(req.params.id);
    if (!cultivo) return res.status(404).json({ message: 'No encontrado' });
    res.json(cultivo);
}

export async function create(req, res) {
    const nuevo = await CultivoModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await CultivoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteCultivo(req, res) {
    await CultivoModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}