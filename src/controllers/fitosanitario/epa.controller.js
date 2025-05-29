import * as EpaModel from '../../models/fitosanitario/epa.model.js';

export async function getAll(req, res) {
    const epas = await EpaModel.findAll();
    res.json(epas);
}

export async function getById(req, res) {
    const epa = await EpaModel.findById(req.params.id);
    if (!epa) return res.status(404).json({ message: 'No encontrado' });
    res.json(epa);
}

export async function create(req, res) {
    const nuevo = await EpaModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await EpaModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteEpa(req, res) {
    await EpaModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}