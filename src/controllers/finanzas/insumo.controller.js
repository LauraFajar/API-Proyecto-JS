import * as InsumoModel from '../../models/finanzas/insumo.model.js';

export async function getAll(req, res) {
    const insumos = await InsumoModel.findAll();
    res.json(insumos);
}

export async function getById(req, res) {
    const insumo = await InsumoModel.findById(req.params.id);
    if (!insumo) return res.status(404).json({ message: 'No encontrado' });
    res.json(insumo);
}

export async function create(req, res) {
    const nuevo = await InsumoModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await InsumoModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteInsumo(req, res) {
    await InsumoModel.deleteInsumo(req.params.id);
    res.json({ message: 'Eliminado' });
}