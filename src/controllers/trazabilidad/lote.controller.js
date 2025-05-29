import * as LoteModel from '../../models/trazabilidad/lote.model.js';

export async function getAll(req, res) {
    const lotes = await LoteModel.findAll();
    res.json(lotes);
}

export async function getById(req, res) {
    const lote = await LoteModel.findById(req.params.id);
    if (!lote) return res.status(404).json({ message: 'No encontrado' });
    res.json(lote);
}

export async function create(req, res) {
    const nuevo = await LoteModel.create(req.body);
    res.status(201).json(nuevo);
}

export async function update(req, res) {
    const actualizado = await LoteModel.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
    res.json(actualizado);
}

export async function deleteLote(req, res) {
    await AlmacenModel.delete(req.params.id);
    res.json({ message: 'Eliminado' });
}