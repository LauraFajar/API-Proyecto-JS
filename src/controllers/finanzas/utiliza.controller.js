import * as UtilizaModel from '../../models/finanzas/utiliza.model.js';

export async function getAll(req, res) {
    const utiliza = await UtilizaModel.findAll();
    res.json(utiliza);
}

export async function getById(req, res) {
    const utiliza = await UtilizaModel.findById(req.params.id);
    if (!utiliza) return res.status(404).json({ message: 'No encontrado' });
    res.json(utiliza);
}

export async function create(req, res) {
    const nuevo = await UtilizaModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await UtilizaModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteUtiliza(req, res) {
    await UtilizaModel.deleteUtiliza(req.params.id);
    res.json({ message: 'Eliminado' });
}